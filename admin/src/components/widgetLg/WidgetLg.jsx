import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle"></h3>
      <table className="widgetLgTable">
        <tbody>

        
        <tr className="widgetLgTr">
          <th className="widgetLgTh"></th>
          <th className="widgetLgTh"></th>
          <th className="widgetLgTh"></th>
          <th className="widgetLgTh"></th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName"></span>
          </td>
          <td className="widgetLgDate"></td>
          <td className="widgetLgAmount"></td>
          <td className="widgetLgStatus">
            <Button type="" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
           
            <span className="widgetLgName"></span>
          </td>
          <td className="widgetLgDate"></td>
          <td className="widgetLgAmount"></td>
          <td className="widgetLgStatus">
            <Button type="" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
           
            <span className="widgetLgName"></span>
          </td>
          <td className="widgetLgDate"></td>
          <td className="widgetLgAmount"></td>
          <td className="widgetLgStatus">
            <Button type="" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
           
            <span className="widgetLgName"></span>
          </td>
          <td className="widgetLgDate"></td>
          <td className="widgetLgAmount"></td>
          <td className="widgetLgStatus">
            <Button type="" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
