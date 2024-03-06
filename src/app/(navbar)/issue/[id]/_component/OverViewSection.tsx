"use client"
import { newFilter } from "../../../(home)/Text";
import { handleStatus } from "../../../(home)/component/GridCard";
import { MarkDownData } from "../../../(home)/component/Home"
import { Tooltip as ReactTooltip } from "react-tooltip";

export default function OverViewSection({
    content,
    overViewRef
}:{
    content: MarkDownData
    overViewRef: React.MutableRefObject<HTMLElement | null>;
})  {


return (    

    <section
        ref={overViewRef}
        id="Overview"
        className=" bg-white p-6 lg:rounded-md lg:shadow-md items-center w-auto  lg:mb-6"
    > 

        <div 
        data-tooltip-id={content.contribution["execution-status"]} 
        className="flex gap-1 items-center py-0.5 px-1 border rounded-full border-gray-200 cursor-pointer hover:bg-gray-100 bg-gray-50 w-fit">
            {handleStatus(content.contribution["execution-status"])}
            <ReactTooltip   
                opacity={100}
                id={content.contribution["execution-status"]}
                place="top"
                variant="error"
                style={{ zIndex: 99 }}
                className="text-sm font-light"
                content={
                    newFilter["execution-status"].find((elem) => elem.name === content.contribution["execution-status"])?.description
                }
            />
        </div>



        <h6 className="text-3xl font-bold my-4 ">
            {content.title}
        </h6>
        <hr className="hidden lg:block my-6  border-t border-gray-300" />
        <p className=" text-gray-500 text-base font-normal">
            {content.description}    
        </p>

        <div className="flex flex-col  my-4 flex-wrap gap-2">

            <div className="flex gap-3 items-center flex-wrap">
                <p className="text-base font-normal text-gray-400">Category:</p>
                <h6 className="text-base font-semibold text-gray-600">{content.category}</h6>
                {/* <div className="inline-flex rounded-full  px-2 py-1  bg-secondaryRed hover:bg-red-100/80 hover:shadow-sm cursor-pointer">
                    <h6 className="text-sm font-normal text-primaryRed">{content.category}</h6>
                </div>        */}
            </div>
            
            <div className="flex gap-3 items-center flex-wrap">
                <p className="text-base font-normal text-gray-400">Type:</p>
                <h6 className="text-base font-semibold text-gray-600">{content.type}</h6>
                {/* <div className="inline-flex rounded-full  px-2 py-1  bg-slate-50 hover:bg-slate-100/90 hover:shadow-sm cursor-pointer">
                    <h6 className="text-sm font-normal text-gray-600">{content.type}</h6>
                </div>        */}
            </div>
           
            <div className="flex gap-3 items-center flex-wrap">
                <p className="text-base font-normal text-gray-400">Effort:</p>
                <h6 className="text-base font-semibold text-gray-600">{content.effort}</h6>
            </div>
           
            <div className="flex gap-3 items-center flex-wrap">
                <p className="text-base font-normal text-gray-400">Skillsets:</p>
                {content.skillsets.map((item, i) => (
                    <h6 className="text-base font-semibold text-gray-600" key={i}>
                        {i !== content.skillsets.length -1 ? item + "," : item}
                    </h6>
                ))}
            </div>

            <div className="flex gap-3 items-center flex-wrap">
                <p className="text-base font-normal text-gray-400">Authors:</p>
                <h6 className="text-base font-semibold text-gray-600">
                    {content.authors.toString()}
                </h6>
            </div>

            <div className="flex gap-3 items-center flex-wrap">
                <p className="text-base font-normal text-gray-400">Contributors:</p>
                <h6 className="text-base font-semibold text-gray-600">
                {content.contribution.contributors.map((item, i) => (
                    <h6 className="text-base font-semibold text-gray-600" key={i}>
                        {i !== content.contribution.contributors.length -1 ? item + "," : item}
                    </h6>
                ))}
                </h6>
            </div>

            <div className="flex gap-3 items-center flex-wrap">
                <p className="text-base font-normal text-gray-400">Execution:</p>
                <h6 className="text-base font-semibold text-gray-600">
                    {content.contribution["execution-status"]}
                </h6>
            </div>



            <div className="flex flex-wrap gap-3 items-center">
                <p className="text-base font-normal text-gray-400">Labels:</p>
                {content.labels.map((item, i) => (
                    <h6 className="text-base font-semibold text-gray-600" key={i}>
                        {i !== content.labels.length -1 ? item + "," : item}
                    </h6>
                ))}
            </div>

            <a
            className="w-fit   mt-8 border px-4 py-2 bg-primaryRed text-white rounded-md hover:bg-primaryRed/90 shadow-md"
            href={content.contribution["discussion-link"][0]}
            >
                <h6 className="text-gray-100 text-center text-md font-medium">Discussion Link</h6>
            </a>

        </div>
    </section>

    )

}
