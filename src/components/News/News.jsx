import React from 'react'
import Head from "./Head";
import BigCard from "./BigCard";
import data from "./data";
import Card from "./Cards";
const News = () => {
    const cards = data.map(i => {
        return (
          <Card
            img= {i.coverImg}
            para={i.title}
          />
        )
      })
  return (
    <>
    <Head/>
      <BigCard/>
      <section className="flex flex-wrap gap-8 mt-5 align-middle self-center justify-center text-black">
        {cards}
      </section>
    </>
  )
}

export default News