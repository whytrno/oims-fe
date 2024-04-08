import BreadcrumbNav from "@/components/BreadcrumbNav";

const PageTitle = ({title}: { title: string }) => {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
            <BreadcrumbNav/>
        </div>
    )
}

export default PageTitle