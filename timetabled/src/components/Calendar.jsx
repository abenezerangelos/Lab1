import Event from "./Events";
const Calendar = ()=>{
    return (<div className="Calendar"> 
    <table>
        <thead>
            <tr>
                <th>
                    
                </th>
                <th>
                    Sunday
                </th>
                <th>
                    Monday
                </th>
                <th>
                    Tuesday
                </th>
                <th>
                    Wednesday
                </th>
                <th>
                    Thursday
                </th>
                <th>
                    Friday
                </th>
                <th>
                    Saturday
                </th>
            </tr>
        </thead>
        <tbody>
           <tr>
                <td className="time">8:00am</td>
                <Event event='Starbucks ☕️' color ='green'/>
                <td className="event"></td>
                <td className="event"></td>
                <td className="event"></td>
                <td className="event"></td>
                <Event event='Yolk 🍳' color ='green'/>
                <td className="event"></td> 
            </tr> 
            <tr>
                <td className="time">9:00am</td>
                <td className="event"></td>
                <td className="event"></td>
                <td className="event"></td>
                <Event event='Subway 🚊' color ='pink'/>
                <td className="event"></td>
                <td className="event"></td>
                <Event event='The Bean 🫘' color ='blue'/>
            </tr>
            <tbody>
               <tr>
                    <td className="time">8:00am</td>
                    <Event event="Starbucks ☕" time="8:00am" location="Downtown" color="#cfeedc" />
                    <td className="event"></td>
                    <td className="event"></td>
                    <td className="event"></td>
                    <td className="event"></td>
                    <Event event="Yolk 🍳" time="8:00am" location="West Loop" color="#cfeedc" />
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
                    <Event event="River Cruise ⛵" time="10:00am" location="Chicago River" color="#bfd8e6" />
                    <td className="event"></td>
                    <td className="event"></td>
                    <td className="event"></td>
                    <td className="event"></td>
                    <Event event="The Bean 🌱" time="10:00am" location="Millennium Park" color="#bfd8e6" />
                </tr>
                <tr>
                    <td className="time">11:00am</td>
                    <td className="event"></td>
                    <td className="event"></td>
                    <td className="event"></td>
                    <Event event="Deep Dish 🍕" time="11:00am" location="Giordano's" color="#cfeedc" />
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
                    <Event event="Subway 🚇" time="12:00pm" location="Loop" color="#f3bfc2" />
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
                    <Event event="Art Institute 🖼️" time="2:00pm" location="Art Institute" color="#bfd8e6" />
                    <td className="event"></td>
                    <Event event="Girl & the Goat" time="2:00pm" location="West Loop" color="#cfeedc" />
                    <td className="event"></td>
                    <td className="event"></td>
                </tr>
                <tr>
                    <td className="time">3:00pm</td>
                    <td className="event"></td>
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
                    <td className="event"></td>
                    <Event event="Fancy Dinner ☕" time="4:00pm" location="Downtown" color="#cfeedc" />
                    <td className="event"></td>
                </tr>
                <tr>
                    <td className="time">5:00pm</td>
                    <td className="event"></td>
                    <td className="event"></td>
                    <td className="event"></td>
                    <td className="event"></td>
                    <td className="event"></td>
                    <Event event="Shopping 🛍️" time="5:00pm" location="Magnificent Mile" color="#bfd8e6" />
                    <td className="event"></td>
                </tr>
            </tbody>