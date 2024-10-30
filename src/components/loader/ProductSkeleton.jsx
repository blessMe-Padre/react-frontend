import ContentLoader from "react-content-loader";

export default function ProductSkeleton(props) {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={450}
            viewBox="0 0 400 450"
            backgroundColor="#8f8f8f"
            foregroundColor="#dedede"
            {...props}
        >
            <rect x="0" y="-55" rx="0" ry="0" width="400" height="350" />
            <rect x="0" y="400" rx="0" ry="0" width="400" height="60" />
            <rect x="0" y="315" rx="0" ry="0" width="400" height="60" />
        </ContentLoader>
    )
}
