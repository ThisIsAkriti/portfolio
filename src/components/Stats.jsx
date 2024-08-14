
const Stats = () => {
  return (
    <div className="border-l border-l-gray-100 pb-10">
        <div>
            <div>
                <div className="grid grid-cols-10 gap-x-2 mx-4">
                    <div className="bg-gray-100 p-4 col-span-3 rounded-md">
                        <img className="size-10 " src="/githubWhiteBorder.png" alt="github" />
                        <div className="mt-1">
                        <p className="font-bold">Github</p>
                        <p className="font-semibold text-sm">@ThisIsAkriti</p>
                        </div>
                       
                    </div>
                    <div className="col-span-7 bg-gray-200 rounded-md px-3 pt-2">
                        <div className="flex items-center justify-center">
                            <img src="/gitStats.png" alt="GitStats" className="h-[88px] w-full"/>
                        </div>
                        <p className="font-semibold text-sm">My github status!</p>
                       
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Stats
