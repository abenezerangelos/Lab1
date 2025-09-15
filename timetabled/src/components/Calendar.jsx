import Event from "./Events";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="time">8:00am</td>
            <td className="event"><Event event="Starbucks ☕" time="8:00am" location="Downtown" color="#cfeedc" /></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"><Event event="Yolk 🍳" time="8:00am" location="West Loop" color="#cfeedc" /></td>
            <td className="event"></td>
          </tr>

          <tr>
            <td className="time">9:00am</td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
          </tr>

          <tr>
            <td className="time">10:00am</td>
            <td className="event"></td>
            <td className="event"><Event event="River Cruise ⛵" time="10:00am" location="Chicago River" color="#bfd8e6" /></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"><Event event="The Bean 🌱" time="10:00am" location="Millennium Park" color="#bfd8e6" /></td>
          </tr>

          <tr>
            <td className="time">11:00am</td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"><Event event="Deep Dish 🍕" time="11:00am" location="Giordano's" color="#cfeedc" /></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
          </tr>

          <tr>
            <td className="time">12:00pm</td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"><Event event="Subway 🚇" time="12:00pm" location="Loop" color="#f3bfc2" /></td>
            <td className="event"></td>
            <td className="event"></td>
          </tr>

          <tr>
            <td className="time">1:00pm</td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
          </tr>

          <tr>
            <td className="time">2:00pm</td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"><Event event="Art Institute 🖼️" time="2:00pm" location="Art Institute" color="#bfd8e6" /></td>
            <td className="event"></td>
            
            <td className="event"></td>
            <td className="event"></td>
          </tr>

          <tr>
            <td className="time">3:00pm</td>
            <td className="event"><Event event="Cubs Game ⚾" time="3:00pm" location="Wrigley" color="#bfd8e6" /></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
          </tr>

          <tr>
            <td className="time">4:00pm</td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"><Event event="Fancy Dinner ☕" time="4:00pm" location="Downtown" color="#cfeedc" /></td>
            <td className="event"></td>
            <td className="event"></td>
          </tr>

          <tr>
            <td className="time">5:00pm</td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"></td>
            <td className="event"><Event event="Shopping 🛍️" time="5:00pm" location="Magnificent Mile" color="#bfd8e6" /></td>
            <td className="event"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;