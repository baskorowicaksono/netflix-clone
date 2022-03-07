import "./widgetLg.scss"
import React from 'react'

function WidgetLg() {
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">
            Latest Transactions
        </h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">
                    Customer
                </th>
                <th className="widgetLgTh">
                    Date
                </th>
                <th className="widgetLgTh">
                    Amount
                </th>
                <th className="widgetLgTh">
                    Status
                </th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://cdn-2.tstatic.net/tribunnews/foto/bank/originals/ibu-han-so-hee-tersandung-kasus-penipuan-uang-kini-teman-sekelasnya-buka-suara.jpg" alt="user-avatar" className="widgetLgImg" />
                    <span className="widgetLgName">Han So Hee</span>
                </td>
                <td className="widgetLgDate">
                    7 Mar 2022
                </td>
                <td className="widgetLgAmount">
                    $2,000.00
                </td>
                <td className="widgetLgStatus">
                    <Button type="Approved" />
                </td>
            </tr>

            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://cdn-2.tstatic.net/tribunnews/foto/bank/originals/ibu-han-so-hee-tersandung-kasus-penipuan-uang-kini-teman-sekelasnya-buka-suara.jpg" alt="user-avatar" className="widgetLgImg" />
                    <span className="widgetLgName">Han So Hee</span>
                </td>
                <td className="widgetLgDate">
                    7 Mar 2022
                </td>
                <td className="widgetLgAmount">
                    $2,000.00
                </td>
                <td className="widgetLgStatus">
                    <Button type="Declined" />
                </td>
            </tr>

            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://cdn-2.tstatic.net/tribunnews/foto/bank/originals/ibu-han-so-hee-tersandung-kasus-penipuan-uang-kini-teman-sekelasnya-buka-suara.jpg" alt="user-avatar" className="widgetLgImg" />
                    <span className="widgetLgName">Han So Hee</span>
                </td>
                <td className="widgetLgDate">
                    7 Mar 2022
                </td>
                <td className="widgetLgAmount">
                    $2,000.00
                </td>
                <td className="widgetLgStatus">
                    <Button type="Pending" />
                </td>
            </tr>

            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://cdn-2.tstatic.net/tribunnews/foto/bank/originals/ibu-han-so-hee-tersandung-kasus-penipuan-uang-kini-teman-sekelasnya-buka-suara.jpg" alt="user-avatar" className="widgetLgImg" />
                    <span className="widgetLgName">Han So Hee</span>
                </td>
                <td className="widgetLgDate">
                    7 Mar 2022
                </td>
                <td className="widgetLgAmount">
                    $2,000.00
                </td>
                <td className="widgetLgStatus">
                    <Button type="Pending" />
                </td>
            </tr>

            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://cdn-2.tstatic.net/tribunnews/foto/bank/originals/ibu-han-so-hee-tersandung-kasus-penipuan-uang-kini-teman-sekelasnya-buka-suara.jpg" alt="user-avatar" className="widgetLgImg" />
                    <span className="widgetLgName">Han So Hee</span>
                </td>
                <td className="widgetLgDate">
                    7 Mar 2022
                </td>
                <td className="widgetLgAmount">
                    $2,000.00
                </td>
                <td className="widgetLgStatus">
                    <Button type="Pending" />
                </td>
            </tr>
        </table>

    </div>
  )
}

export default WidgetLg