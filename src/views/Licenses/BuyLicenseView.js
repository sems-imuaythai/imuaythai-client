import React from "react";
import Row from "../../components/Layout/Row";
import Page from "../../components/Page/Page";
import PageHeader from "../../components/Page/PageHeader";
import PageContent from "../../components/Page/PageContent";

const AvailableLicenseView = props => {
    const { payment } = props;
    console.log(payment);
    return (
        <Page>
            <PageHeader>{payment.description}</PageHeader>
            <PageContent>
                <h5>If you really want to by license {payment.description} for {payment.amount/100} {payment.currency} then click pay button below.</h5>
                <form action={payment.paymentsUrl} method="post">
                    <input hidden type="text" name="p24_session_id" value={payment.sessionId} />
                    <input hidden type="text" name="p24_merchant_id" value={payment.merchantId}/>
                    <input hidden type="text" name="p24_pos_id" value={payment.posId} />
                    <input hidden type="text" name="p24_amount" value={payment.amount} />
                    <input hidden type="text" name="p24_currency" value={payment.currency} />
                    <input hidden type="text" name="p24_description" value={payment.description} />
                    <input hidden type="text" name="p24_client" value={payment.client} />
                    <input hidden type="text" name="p24_address" value={payment.address} />
                    <input hidden type="text" name="p24_zip" value={payment.zipCode} />
                    <input hidden type="text" name="p24_city" value={payment.city} />
                    <input hidden type="text" name="p24_country" value={payment.country} />
                    <input hidden type="text" name="p24_email" value={payment.email} />
                    <input hidden type="text" name="p24_language" value={payment.language} />
                    <input hidden type="text" name="p24_url_return" value={payment.urlReturn} />
                    <input
                        hidden
                        type="text"
                        name="p24_url_status"
                        value={payment.urlStatus}
                    />

                    <input hidden type="text" name="p24_api_version" value="3.2" />
                    <input hidden type="text" name="p24_sign" value={payment.sign} />
                    <input className="btn btn-primary" name="submit_send" value="Buy" type="submit" />
                </form>
            </PageContent>
        </Page>
    );
};

export default AvailableLicenseView;
