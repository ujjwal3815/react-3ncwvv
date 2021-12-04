import React from 'react';

const Nav = () => {
  return (
    <>
      <div className="head1">
        <a href="bp.html">
          <h1 className="startheading">BookPod.</h1>
        </a>
        <div className="menu">
          <nav>
            <a href="home.html">HOME</a>
            <a href="categories.html">CATEGORIES</a>
            <a href="podcast.html">PODCASTS</a>
          </nav>
        </div>
        <div className="likho1">
          <input
            type="text"
            className="rounded-pill w-75 p-2 me form-control-text"
            placeholder="  Search...."
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
