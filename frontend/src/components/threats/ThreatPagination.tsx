export default function ThreatPagination() {

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: 20,
                gap: 10,
            }}
        >

            <button className="primary-btn">

                Previous

            </button>

            <button className="primary-btn">

                Next

            </button>

        </div>

    );

}