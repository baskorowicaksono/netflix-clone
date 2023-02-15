import "./widgetLg.scss"

const WidgetLg = () => {

    const Button = ({type}) => {
        return (
            <button className={"widgetLgButton " + type}>{type}</button>
        )
    }

  return (
    <div className="widgetLg">
       <h3 className="widgetLgTitle">Latest Transactions</h3>
       <table className="widgetLgTable">
        <tbody>
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://pixabay.com/get/g449f6d230dcb77fac8fd247736f22636aae5db0882f23c02c0aeddcd7f4cfe9c82d73090ff7d59b26381991e3c4d79e7_1280.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Susanti</span>
                </td>
                <td className="widgetLgDate">23 Oct 2022</td>
                <td className="widgetLgAmount">Rp3,765,500.00</td>
                <td className="widgetLgStatus">
                    <Button type="Approved" />
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://pixabay.com/get/g449f6d230dcb77fac8fd247736f22636aae5db0882f23c02c0aeddcd7f4cfe9c82d73090ff7d59b26381991e3c4d79e7_1280.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Susanti</span>
                </td>
                <td className="widgetLgDate">23 Oct 2022</td>
                <td className="widgetLgAmount">Rp3,765,500.00</td>
                <td className="widgetLgStatus">
                    <Button type="Declined" />
                </td>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="https://pixabay.com/get/g449f6d230dcb77fac8fd247736f22636aae5db0882f23c02c0aeddcd7f4cfe9c82d73090ff7d59b26381991e3c4d79e7_1280.jpg" alt="" className="widgetLgImg" />
                    <span className="widgetLgName">Susan Susanti</span>
                </td>
                <td className="widgetLgDate">23 Oct 2022</td>
                <td className="widgetLgAmount">Rp3,765,500.00</td>
                <td className="widgetLgStatus">
                    <Button type="Pending" />
                </td>
            </tr>
        </tbody>
       </table>
    </div>
  )
}

export default WidgetLg