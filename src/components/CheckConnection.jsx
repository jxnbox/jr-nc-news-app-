import { Detector } from "react-detect-offline";

function CheckConnection() {
    return (
        <Detector render={({ online }) => (
            <div className={online ? "connection_normal" : "connection_warning"}>
                {online ? "🌐✔️ connected" : "🌐❌ disconnected"}
            </div>
  )}
/>
    )
}

export default CheckConnection;