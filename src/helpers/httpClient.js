const API =  "https://api.themoviedb.org/3";

export const get = ( path ) => {
  return (
    fetch( API + path, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDYwZTUwYzM4ZGY3ZjRlNmQyOTY4YjFmN2E0YWY3MSIsInN1YiI6IjYzYjcxMTNiNDMyNTBmMDBkYTQwZDBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G70ApqVUjtIag-u5zkFgjTJhIp_v2H2C0D0N1PEoY9Y',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((result) => result.json())
  )
}