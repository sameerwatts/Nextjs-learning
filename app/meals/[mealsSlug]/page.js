const SharePage = ({params}) => {

    return (
      <main>
        <h1>Share page inside the meal page</h1>
        <p>{params.mealsSlug}</p>
      </main>
    );
  };
  
  export default SharePage;
  