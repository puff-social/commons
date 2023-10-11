-- Recalculate leaderboard positions function --
CREATE OR REPLACE FUNCTION public.recalc_leaderboard()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  INSERT INTO device_leaderboard (id, position, avg_position)
SELECT
  id,
  RANK() OVER (ORDER BY dabs DESC) as rank,
  RANK() OVER (ORDER BY avg_dabs DESC) as avg_rank
FROM
  devices WHERE user_id IS NOT NULL AND last_active > CURRENT_DATE - interval '28 days' ON CONFLICT (id)
  DO
  UPDATE
  SET
    position = EXCLUDED.position,
	avg_position = EXCLUDED.avg_position;
  RETURN NEW;
END
$function$

-- Call the recalc_leaderboard() function when leaderboard UPDATEs --
CREATE TRIGGER device_recalc_on_update
	AFTER UPDATE ON devices
	FOR EACH ROW
	EXECUTE PROCEDURE recalc_leaderboard ();


-- Firmware calculation functions --
CREATE OR REPLACE FUNCTION firmwareToNumber(str text)
RETURNS integer AS $$
DECLARE
    result integer := 0;
    char_code integer;
BEGIN
    FOR i IN 1..length(str) LOOP
        char_code := ascii(substring(str, i, 1));
        result := result * 26 + char_code - 64;
    END LOOP;
    
    RETURN result;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION meetsMinimumFirmware(current text, minimum text)
RETURNS boolean AS $$
BEGIN
    RETURN firmwareToNumber(current) >= firmwareToNumber(minimum);
END;
$$ LANGUAGE plpgsql;

-- Update device raw firmware function --
CREATE OR REPLACE FUNCTION public.update_firmware()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  UPDATE devices
  SET firmware_raw = firmwareToNumber(NEW.firmware) WHERE id = NEW.id;
  RETURN NEW;
END;
$function$;

-- Call the update_firmware() function when device UPDATEs --
CREATE TRIGGER device_fw_raw_update
	AFTER UPDATE OF firmware ON devices
  FOR EACH ROW
	EXECUTE PROCEDURE update_firmware ();

-- Call the update_firmware() function when device UPDATEs --
CREATE TRIGGER device_fw_raw_create
	AFTER INSERT ON devices
  FOR EACH ROW
	EXECUTE PROCEDURE update_firmware ();