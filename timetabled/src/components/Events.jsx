const Event = (props) => {
    // Keep color logic in CSS: expose the raw color and optional text color
    // as CSS custom properties and let SCSS / browser CSS compute the lighter
    // variant for the background.
    const style = {};
    if (props.color) {
        style['--event-bg'] = props.color;
        style['--event-fg'] = props.textColor || '#000';
    } else if (props.textColor) {
        style['--event-fg'] = props.textColor;
    }

    return (
        <td className="Event" style={style}>
            <h5>{props.event}</h5>
            {/* <text>{props.date} at {props.time}</text>
            <br/> */}
            <text>{props.location}</text>
        </td>
    );
}
    
export default Event;