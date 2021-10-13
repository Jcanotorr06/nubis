import { GetStaticProps } from "next"
const _error = () => {

    return (
        <div>
            
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  };

export default _error
