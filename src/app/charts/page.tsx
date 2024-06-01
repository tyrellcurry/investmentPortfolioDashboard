import ChartJS from "../components/charts/ChartsJS/Chartjs"
import Panel from "../components/charts/ChartsJS/Panel/Panel";
function ChartJSPage() {
  return (
    <div className="py-12">
      <h1 className="text-center text-4xl font-semibold">ChartJS</h1>
      <div className="w-full h-[90vh] m-auto py-5 relative flex justify-center overflow-hidden">
        <Panel>
          <ChartJS />
        </Panel>
      </div>
    </div>
  )
}

export default ChartJSPage;
