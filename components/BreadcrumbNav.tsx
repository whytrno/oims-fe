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
    const path = pathName === '/' ? [''] : pathName.split('/');

    const newPath = path.map((item, index) => {
        if (index === 0) return '';
        return isNaN(Number(item)) ? item : 'Detail';
    });

    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                {
                    newPath.map((item, index) => {
                        const breadcrumbPath = process.env.domain + newPath.slice(0, index + 1).join('/');
                        const breadcrumbLabel = item !== '' ? item.charAt(0).toUpperCase() + item.slice(1) :
                            <HomeIcon className={'size-4'}/>;
                        return (
                            <React.Fragment key={index}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        href={breadcrumbPath}>{breadcrumbLabel}</BreadcrumbLink>
                                </BreadcrumbItem>
                                {
                                    index < newPath.length - 1 && <BreadcrumbSeparator/>
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