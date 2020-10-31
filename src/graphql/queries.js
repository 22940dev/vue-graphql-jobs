import gql from 'graphql-tag'

export const jobsListQuery = gql`
    query {
        jobs {
            id
            slug
            postedAt
            title
            remotes {
                name
            }
            tags {
                name
            }
            cities {
                name
                country {
                    name
                }
            }
            company {
                name
                slug
                logoUrl
            }
        }
    }
`

export const jobQuery = gql`
    query($jobData: JobInput!) {
        job(input: $jobData) {
            title
            description
            postedAt
            company {
                name
                logoUrl
            }
            cities {
                name
                country {
                    name
                }
            }
            remotes {
                name
            }
            tags {
                name
            }
            userEmail
            locationNames
            applyUrl
        }
    }
`