'use client'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {HomeIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import React from "react";

const BreadcrumbNav = () => {
    const pathName = usePathname();
    const path = pathName === '/' ? [''] : pathName.split('/')

    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                {
                    path.map((item, index) => {
                        const breadcrumbPath = '/' + path.slice(0, index + 1).join('/');
                        const breadcrumbLabel = item !== '' ? item.charAt(0).toUpperCase() + item.slice(1) :
                            <HomeIcon className={'size-4'}/>;
                        return (
                            <React.Fragment key={index}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href={breadcrumbPath}>{breadcrumbLabel}</BreadcrumbLink>
                                </BreadcrumbItem>
                                {
                                    index < path.length - 1 && <BreadcrumbSeparator/>
                                }
                            </React.Fragment>
                        )
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadcrumbNav