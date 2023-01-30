import { Spinner } from "flowbite-react/lib/esm/components/Spinner";

const Loader = (): JSX.Element => {
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <Spinner color="success" size="xl" />
        </div>
    );
}

export default Loader;