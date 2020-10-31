export const getCompanyLogo = companyLogo => {
    return companyLogo ? companyLogo : require( `../assets/no_logo.png`)
}

export const sortJobs = jobs => {
    return jobs.sort(function(a, b) {
        return (a.postedAt < b.postedAt) ? 1 : ((a.postedAt > b.postedAt) ? 1 : 0);
    });
}

export const getPostedAt = postedAt => {
    return postedAt.split("T")[0]
}