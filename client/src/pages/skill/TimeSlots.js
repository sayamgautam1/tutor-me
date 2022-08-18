import { TimeSlotsStyle } from "./SingleSkill-style";
import { useMutation } from "@apollo/client";
import { ADD_CLASS_TIME } from "../../utils/mutations";

const TimeSlots = ({ classTime }) => {
  const [addClass, { error, data }] = useMutation(ADD_CLASS_TIME);

  const addTimeSlot = async (classId) => {
    try {
      const { data } = await addClass({
        variables: { classId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <TimeSlotsStyle>
      <div className="container">
        <div className="time-list">
          {console.log(classTime)}
          {classTime && classTime.length > 0 ? (
            classTime.map((time) => (
              <li
                key={time.index}
                className="time"
                onClick={() => addTimeSlot(time._id)}
              >
                <span className="skill-id">
                  start-time:
                  {` ${new Date(parseInt(time.startTime)).toLocaleDateString(
                    "en-GB"
                  )} ${new Date(parseInt(time.startTime)).toLocaleTimeString(
                    "en-GB"
                  )}`}
                </span>

                <span className="skill-id">
                  end-time:
                  {` ${new Date(parseInt(time.endTime)).toLocaleDateString(
                    "en-GB"
                  )} ${new Date(parseInt(time.endTime)).toLocaleTimeString(
                    "en-GB"
                  )}`}
                </span>
              </li>
            ))
          ) : (
            <h1>No timeslots available!</h1>
          )}
        </div>
      </div>
    </TimeSlotsStyle>
  );
};

export default TimeSlots;
