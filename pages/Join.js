export default function Join() {
    return (
      <>
        <div class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 ">
            <input class="valid:border-green-500 ..." type="number" placeholder="Enter your bid (SOL)" /><br />
            <input type="text" placeholder="Select a nickname" /><br />
            <div class="flex flex-row space-x-4">
                <input class="bg-red-500 hover:bg-red-600 space-x-5 gap-x-8" type="button" id="select_red" value="Red" />
                <input class="bg-blue-500 hover:bg-blue-600 space-x-5 gap-x-8" type="button" id="select_blue" value="Blue" /><br />
            </div>
            <button class="outline outline-2 ... bg-violet-500 bg-offset-120 hover:bg-violet-600 active:bg-violet-700  ..." type="submit">Join game.</button>
        </div>
      </>
    )
  }