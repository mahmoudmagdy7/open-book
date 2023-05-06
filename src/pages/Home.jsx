import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import axios from "axios";

import gridViewIcon from "../assets/icons/gridView.svg";
import listViewIcon from "../assets/icons/open-menu.svg";
import sideBarViewIcon from "../assets/icons/sidebarView.svg";
import PaginatedItems from "../components/pagination";
// import testSvg from "https://downloads.hindawi.org/covers/svg/270x360/80626160.svg";

export default function Home() {
  const [books, setBooks] = useState([
    {
      rank: 1,
      rank_last_week: 0,
      weeks_on_list: 1,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "1538750635",
      primary_isbn13: "9781538750636",
      publisher: "Grand Central",
      description:
        "A former detective becomes the prime suspect in a murder case involving a man with mob ties who was in witness protection.",
      price: "0.00",
      title: "SIMPLY LIES",
      author: "David Baldacci",
      contributor: "by David Baldacci",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781538750636.jpg",
      book_image_width: 331,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/1538750635?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "1538750635",
          isbn13: "9781538750636",
        },
        {
          isbn10: "1538750597",
          isbn13: "9781538750599",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/1538750635?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9781538750636?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781538750636",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSIMPLY%252BLIES%252FDavid%252BBaldacci%252F9781538750636&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSIMPLY%252BLIES%252BDavid%252BBaldacci",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781538750636&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DSIMPLY%2BLIES",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781538750636%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSIMPLY%2BLIES%2BDavid%2BBaldacci%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/686490d2-156a-571b-bf8b-c043cb28c695",
    },
    {
      rank: 2,
      rank_last_week: 2,
      weeks_on_list: 50,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "038554734X",
      primary_isbn13: "9780385547345",
      publisher: "Doubleday",
      description:
        "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",
      price: "0.00",
      title: "LESSONS IN CHEMISTRY",
      author: "Bonnie Garmus",
      contributor: "by Bonnie Garmus",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg",
      book_image_width: 328,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "038554734X",
          isbn13: "9780385547345",
        },
        {
          isbn10: "0593507533",
          isbn13: "9780593507537",
        },
        {
          isbn10: "0385547374",
          isbn13: "9780385547376",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9780385547345?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780385547345",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FLESSONS%252BIN%252BCHEMISTRY%252FBonnie%252BGarmus%252F9780385547345&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DLESSONS%252BIN%252BCHEMISTRY%252BBonnie%252BGarmus",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780385547345&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DLESSONS%2BIN%2BCHEMISTRY",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780385547345%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DLESSONS%2BIN%2BCHEMISTRY%2BBonnie%2BGarmus%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/717e0ead-9782-567d-af27-d9a6cfb1856f",
    },
    {
      rank: 3,
      rank_last_week: 4,
      weeks_on_list: 6,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "0593243730",
      primary_isbn13: "9780593243732",
      publisher: "Dial",
      description:
        "In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past resurfaces as he gets to know the family of his college sweetheart.",
      price: "0.00",
      title: "HELLO BEAUTIFUL",
      author: "Ann Napolitano",
      contributor: "by Ann Napolitano",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593243732.jpg",
      book_image_width: 330,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/0593243730?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "0593243730",
          isbn13: "9780593243732",
        },
        {
          isbn10: "0593243749",
          isbn13: "9780593243749",
        },
        {
          isbn10: "0593664043",
          isbn13: "9780593664049",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/0593243730?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9780593243732?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593243732",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FHELLO%252BBEAUTIFUL%252FAnn%252BNapolitano%252F9780593243732&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DHELLO%252BBEAUTIFUL%252BAnn%252BNapolitano",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593243732&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DHELLO%2BBEAUTIFUL",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593243732%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DHELLO%2BBEAUTIFUL%2BAnn%2BNapolitano%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/3b1a624d-7296-5b11-9c41-a473f433c18d",
    },
    {
      rank: 4,
      rank_last_week: 6,
      weeks_on_list: 4,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "1501117297",
      primary_isbn13: "9781501117299",
      publisher: "Scribner",
      description:
        "Nine years after being cast out, a young woman returns to reclaim her place in her family and comes into her own as a bootlegger.",
      price: "0.00",
      title: "HANG THE MOON",
      author: "Jeannette Walls",
      contributor: "by Jeannette Walls",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781501117299.jpg",
      book_image_width: 331,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/1501117297?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "1501117297",
          isbn13: "9781501117299",
        },
        {
          isbn10: "1501117319",
          isbn13: "9781501117312",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/1501117297?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9781501117299?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781501117299",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FHANG%252BTHE%252BMOON%252FJeannette%252BWalls%252F9781501117299&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DHANG%252BTHE%252BMOON%252BJeannette%252BWalls",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501117299&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DHANG%2BTHE%2BMOON",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781501117299%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DHANG%2BTHE%2BMOON%2BJeannette%2BWalls%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/29d99d62-a7ef-5d5f-b838-eaa86c77691a",
    },
    {
      rank: 5,
      rank_last_week: 1,
      weeks_on_list: 2,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "0593422414",
      primary_isbn13: "9780593422410",
      publisher: "Putnam",
      description:
        "The second book in the Letty Davenport series. Letty takes an undercover assignment that puts her in harm’s way with a group of hackers.",
      price: "0.00",
      title: "DARK ANGEL",
      author: "John Sandford",
      contributor: "by John Sandford",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593422410.jpg",
      book_image_width: 331,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/0593422414?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "0593422414",
          isbn13: "9780593422410",
        },
        {
          isbn10: "0593422422",
          isbn13: "9780593422427",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/0593422414?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9780593422410?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593422410",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDARK%252BANGEL%252FJohn%252BSandford%252F9780593422410&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDARK%252BANGEL%252BJohn%252BSandford",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593422410&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDARK%2BANGEL",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593422410%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDARK%2BANGEL%2BJohn%2BSandford%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/c80c363e-70d6-5d41-9003-4e8438b52a99",
    },
    {
      rank: 6,
      rank_last_week: 5,
      weeks_on_list: 30,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "0593321200",
      primary_isbn13: "9780593321201",
      publisher: "Knopf",
      description:
        "Two friends find their partnership challenged in the world of video game design.",
      price: "0.00",
      title: "TOMORROW, AND TOMORROW, AND TOMORROW",
      author: "Gabrielle Zevin",
      contributor: "by Gabrielle Zevin",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593321201.jpg",
      book_image_width: 329,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/0593321200?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "0593321200",
          isbn13: "9780593321201",
        },
        {
          isbn10: "0593321219",
          isbn13: "9780593321218",
        },
        {
          isbn10: "0593591631",
          isbn13: "9780593591635",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/0593321200?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9780593321201?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593321201",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTOMORROW%25252C%252BAND%252BTOMORROW%25252C%252BAND%252BTOMORROW%252FGabrielle%252BZevin%252F9780593321201&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTOMORROW%25252C%252BAND%252BTOMORROW%25252C%252BAND%252BTOMORROW%252BGabrielle%252BZevin",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593321201&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTOMORROW%252C%2BAND%2BTOMORROW%252C%2BAND%2BTOMORROW",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593321201%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTOMORROW%252C%2BAND%2BTOMORROW%252C%2BAND%2BTOMORROW%2BGabrielle%2BZevin%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/bc07e3e3-e917-50bb-9439-70118335f40c",
    },
    {
      rank: 7,
      rank_last_week: 0,
      weeks_on_list: 1,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "0062851233",
      primary_isbn13: "9780062851239",
      publisher: "Morrow",
      description:
        "The second book in the City trilogy. When a movie is made about his former life, Danny Ryan looks for his cut and seeks to restart his criminal empire.",
      price: "0.00",
      title: "CITY OF DREAMS",
      author: "Don Winslow",
      contributor: "by Don Winslow",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780062851239.jpg",
      book_image_width: 331,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/0062851233?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "0062851233",
          isbn13: "9780062851239",
        },
        {
          isbn10: "0062851268",
          isbn13: "9780062851260",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/0062851233?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9780062851239?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780062851239",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FCITY%252BOF%252BDREAMS%252FDon%252BWinslow%252F9780062851239&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DCITY%252BOF%252BDREAMS%252BDon%252BWinslow",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780062851239&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DCITY%2BOF%2BDREAMS",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780062851239%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DCITY%2BOF%2BDREAMS%2BDon%2BWinslow%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/9e149b78-4208-5e36-ab79-598bf98d1dd7",
    },
    {
      rank: 8,
      rank_last_week: 0,
      weeks_on_list: 1,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "1668021048",
      primary_isbn13: "9781668021040",
      publisher: "Atria",
      description:
        "A battered wife raised in a violent home attempts to halt the cycle of abuse.",
      price: "0.00",
      title: "IT ENDS WITH US",
      author: "Colleen Hoover",
      contributor: "by Colleen Hoover",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg",
      book_image_width: 319,
      book_image_height: 495,
      amazon_product_url:
        "http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "1501110365",
          isbn13: "9781501110368",
        },
        {
          isbn10: "1501110373",
          isbn13: "9781501110375",
        },
        {
          isbn10: "1982143657",
          isbn13: "9781982143657",
        },
        {
          isbn10: "1508212694",
          isbn13: "9781508212690",
        },
        {
          isbn10: "1797107453",
          isbn13: "9781797107455",
        },
        {
          isbn10: "1804228206",
          isbn13: "9781804228203",
        },
        {
          isbn10: "1432899791",
          isbn13: "9781432899790",
        },
        {
          isbn10: "1668021048",
          isbn13: "9781668021040",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9781668021040?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781668021040",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FIT%252BENDS%252BWITH%252BUS%252FColleen%252BHoover%252F9781668021040&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DIT%252BENDS%252BWITH%252BUS%252BColleen%252BHoover",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781668021040&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BENDS%2BWITH%2BUS",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781668021040%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DIT%2BENDS%2BWITH%2BUS%2BColleen%2BHoover%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/62e1f1fc-7501-5429-9d2e-0fea5c95f336",
    },
    {
      rank: 9,
      rank_last_week: 0,
      weeks_on_list: 1,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "198218941X",
      primary_isbn13: "9781982189419",
      publisher: "Simon & Schuster",
      description:
        "In a follow-up to “Where Are the Children?,” Melissa and Mike use their experience of being abducted to search for a missing girl.",
      price: "0.00",
      title: "WHERE ARE THE CHILDREN NOW?",
      author: "Mary Higgins Clark and Alafair Burke",
      contributor: "by Mary Higgins Clark and Alafair Burke",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781982189419.jpg",
      book_image_width: 330,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/198218941X?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "198218941X",
          isbn13: "9781982189419",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/198218941X?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9781982189419?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781982189419",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWHERE%252BARE%252BTHE%252BCHILDREN%252BNOW%25253F%252FMary%252BHiggins%252BClark%252Band%252BAlafair%252BBurke%252F9781982189419&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWHERE%252BARE%252BTHE%252BCHILDREN%252BNOW%25253F%252BMary%252BHiggins%252BClark%252Band%252BAlafair%252BBurke",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781982189419&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWHERE%2BARE%2BTHE%2BCHILDREN%2BNOW%253F",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781982189419%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWHERE%2BARE%2BTHE%2BCHILDREN%2BNOW%253F%2BMary%2BHiggins%2BClark%2Band%2BAlafair%2BBurke%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/56b4b929-cbf1-5900-a35e-48da7a11583a",
    },
    {
      rank: 10,
      rank_last_week: 9,
      weeks_on_list: 2,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "0316406201",
      primary_isbn13: "9780316406208",
      publisher: "Little, Brown",
      description:
        "Secrets and hopes get unpacked when a mother and daughter vacation together in Paris.",
      price: "0.00",
      title: "THINGS I WISH I TOLD MY MOTHER",
      author: "Susan Patterson and Susan DiLallo with James Patterson",
      contributor: "by Susan Patterson and Susan DiLallo with James Patterson",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780316406208.jpg",
      book_image_width: 331,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/0316406201?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "0316406201",
          isbn13: "9780316406208",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/0316406201?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9780316406208?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780316406208",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHINGS%252BI%252BWISH%252BI%252BTOLD%252BMY%252BMOTHER%252FSusan%252BPatterson%252Band%252BSusan%252BDiLallo%252Bwith%252BJames%252BPatterson%252F9780316406208&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHINGS%252BI%252BWISH%252BI%252BTOLD%252BMY%252BMOTHER%252BSusan%252BPatterson%252Band%252BSusan%252BDiLallo%252Bwith%252BJames%252BPatterson",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780316406208&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHINGS%2BI%2BWISH%2BI%2BTOLD%2BMY%2BMOTHER",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780316406208%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHINGS%2BI%2BWISH%2BI%2BTOLD%2BMY%2BMOTHER%2BSusan%2BPatterson%2Band%2BSusan%2BDiLallo%2Bwith%2BJames%2BPatterson%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/9ff94a45-3e61-5c3e-8099-7ecbfeda315b",
    },
    {
      rank: 11,
      rank_last_week: 8,
      weeks_on_list: 3,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "0399590943",
      primary_isbn13: "9780399590948",
      publisher: "Random House",
      description:
        "A late-night show’s sketch writer may become involved with a pop music sensation who is a guest host.",
      price: "0.00",
      title: "ROMANTIC COMEDY",
      author: "Curtis Sittenfeld",
      contributor: "by Curtis Sittenfeld",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780399590948.jpg",
      book_image_width: 329,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/0399590943?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "0399590943",
          isbn13: "9780399590948",
        },
        {
          isbn10: "0399590951",
          isbn13: "9780399590955",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/0399590943?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9780399590948?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780399590948",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FROMANTIC%252BCOMEDY%252FCurtis%252BSittenfeld%252F9780399590948&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DROMANTIC%252BCOMEDY%252BCurtis%252BSittenfeld",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780399590948&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DROMANTIC%2BCOMEDY",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780399590948%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DROMANTIC%2BCOMEDY%2BCurtis%2BSittenfeld%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/a261a633-46c6-5d46-9b84-d08acc481b1c",
    },
    {
      rank: 12,
      rank_last_week: 10,
      weeks_on_list: 3,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "0063020890",
      primary_isbn13: "9780063020894",
      publisher: "Mariner",
      description:
        "An unemployed journalist connects events in a true-crime book, which details a long-buried murder in 1959 in South Australia, to her own family.",
      price: "0.00",
      title: "HOMECOMING",
      author: "Kate Morton",
      contributor: "by Kate Morton",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780063020894.jpg",
      book_image_width: 334,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/0063020890?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "0063020890",
          isbn13: "9780063020894",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/0063020890?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9780063020894?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063020894",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FHOMECOMING%252FKate%252BMorton%252F9780063020894&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DHOMECOMING%252BKate%252BMorton",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063020894&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DHOMECOMING",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063020894%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DHOMECOMING%2BKate%2BMorton%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/4fa8934d-8510-561e-8392-8c16adc415c5",
    },
    {
      rank: 13,
      rank_last_week: 13,
      weeks_on_list: 27,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "0063251922",
      primary_isbn13: "9780063251922",
      publisher: "Harper",
      description:
        "A reimagining of Charles Dickens’s “David Copperfield” set in the mountains of southern Appalachia.",
      price: "0.00",
      title: "DEMON COPPERHEAD",
      author: "Barbara Kingsolver",
      contributor: "by Barbara Kingsolver",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780063251922.jpg",
      book_image_width: 329,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/0063251922?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "0063251922",
          isbn13: "9780063251922",
        },
        {
          isbn10: "006325199X",
          isbn13: "9780063251991",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/0063251922?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9780063251922?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063251922",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDEMON%252BCOPPERHEAD%252FBarbara%252BKingsolver%252F9780063251922&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDEMON%252BCOPPERHEAD%252BBarbara%252BKingsolver",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063251922&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDEMON%2BCOPPERHEAD",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063251922%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDEMON%2BCOPPERHEAD%2BBarbara%2BKingsolver%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/dd6e4f9d-d082-552d-b888-7276a25b5aca",
    },
    {
      rank: 14,
      rank_last_week: 14,
      weeks_on_list: 7,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "059349069X",
      primary_isbn13: "9780593490693",
      publisher: "Pamela Dorman",
      description:
        "Three women navigate their roles in a well-to-do family living in Brooklyn Heights.",
      price: "0.00",
      title: "PINEAPPLE STREET",
      author: "Jenny Jackson",
      contributor: "by Jenny Jackson",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593490693.jpg",
      book_image_width: 331,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/059349069X?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "059349069X",
          isbn13: "9780593490693",
        },
        {
          isbn10: "0593490703",
          isbn13: "9780593490709",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/059349069X?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9780593490693?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780593490693",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FPINEAPPLE%252BSTREET%252FJenny%252BJackson%252F9780593490693&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DPINEAPPLE%252BSTREET%252BJenny%252BJackson",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780593490693&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DPINEAPPLE%2BSTREET",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780593490693%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DPINEAPPLE%2BSTREET%2BJenny%2BJackson%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/ef3b13a2-5258-57ad-8bce-8af149b7dde3",
    },
    {
      rank: 15,
      rank_last_week: 12,
      weeks_on_list: 14,
      asterisk: 0,
      dagger: 0,
      primary_isbn10: "0063204150",
      primary_isbn13: "9780063204157",
      publisher: "Ecco",
      description:
        "A widow working the night shift at the Sowell Bay Aquarium is aided in solving a mystery by a giant Pacific octopus living there.",
      price: "0.00",
      title: "REMARKABLY BRIGHT CREATURES",
      author: "Shel Van Pelt",
      contributor: "by Shelby Van Pelt",
      contributor_note: "",
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780063204157.jpg",
      book_image_width: 329,
      book_image_height: 500,
      amazon_product_url:
        "https://www.amazon.com/dp/0063204150?tag=NYTBSREV-20",
      age_group: "",
      book_review_link: "",
      first_chapter_link: "",
      sunday_review_link: "",
      article_chapter_link: "",
      isbns: [
        {
          isbn10: "0063204150",
          isbn13: "9780063204157",
        },
        {
          isbn10: "0063204185",
          isbn13: "9780063204188",
        },
        {
          isbn10: "0063204169",
          isbn13: "9780063204164",
        },
      ],
      buy_links: [
        {
          name: "Amazon",
          url: "https://www.amazon.com/dp/0063204150?tag=NYTBSREV-20",
        },
        {
          name: "Apple Books",
          url: "https://goto.applebooks.apple/9780063204157?at=10lIEQ",
        },
        {
          name: "Barnes and Noble",
          url: "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063204157",
        },
        {
          name: "Books-A-Million",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FREMARKABLY%252BBRIGHT%252BCREATURES%252FShel%252BVan%252BPelt%252F9780063204157&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DREMARKABLY%252BBRIGHT%252BCREATURES%252BShel%252BVan%252BPelt",
        },
        {
          name: "Bookshop",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063204157&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DREMARKABLY%2BBRIGHT%2BCREATURES",
        },
        {
          name: "IndieBound",
          url: "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063204157%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DREMARKABLY%2BBRIGHT%2BCREATURES%2BShel%2BVan%2BPelt%26aff%3DNYT",
        },
      ],
      book_uri: "nyt://book/206a5e83-12f4-5ea9-8e63-1da5470a6ef5",
    },
  ]);
  const booksContainer = document.querySelector("#books-container");
  function listView() {
    booksContainer.classList.add("list-view");
    booksContainer.classList.remove(
      "lg:grid-cols-4",
      "md:grid-cols-4",
      "sm:grid-cols-4",
      "grid-cols-2"
    );
    console.log("list view acitvated");
  }

  useEffect(function () {}, []);
  return (
    <>
      <main className=" pb-3">
        <div className="grid grid-cols-12 gap-x-6  mx-auto max-w-screen-2xl ">
          {/* right section  */}
          <section className=" col-span-2  col-start-2 text-start hidden lg:block md:block">
            <h2 className="text-3xl font-semibold">الاقسام</h2>
            <ul className="border rounded-lg mt-5 py-4 px-5">
              <li className="font-semibold">
                <Link> علوم</Link>
              </li>
              <li className="font-semibold mt-2">
                <Link> رياضة</Link>
              </li>
              <li className="font-semibold mt-2">
                <Link> أدب</Link>
              </li>
              <li className="font-semibold mt-2">
                <Link> دين</Link>
              </li>
              <li className="font-semibold mt-2">
                <Link> تكنولوجيا</Link>
              </li>
              <li className="font-semibold mt-2">
                <Link>قصص الأطفال</Link>
              </li>
            </ul>
          </section>
          {/* left section  */}
          <section className="col-span-full lg:col-span-8 md:col-span-8 sm:col-span-12 mx-5 lg:mx-0 md:mx-0  text-start">
            <h2 className="text-3xl font-semibold mb-5">الكتب</h2>
            <div className=" items-center  justify-between  py-3 border rounded-lg ">
              <div className="w-full h-5 flex justify-between">
                {/* sort option  */}
                <div className="text-center flex items-center justify-between px-4 w-32 border-e">
                  <img
                    className="h-5"
                    src={require("../assets/icons/sort.png")}
                    alt=" search icon"
                  />
                  <h6 className="font-bold  text-base">الاحدث</h6>
                  <img
                    className="h-4"
                    src={require("../assets/icons/chevron.png")}
                    alt=" search icon"
                  />
                </div>
                {/* view option */}
                <div className="flex items-center grow justify-start ms-2">
                  <button className="view-button pe-1">
                    <img
                      // onClick={listView}
                      className="h-5 w-5"
                      src={listViewIcon}
                      alt=" list view "
                    />
                  </button>
                  <button className="view-button pe-1">
                    <img
                      className="h-5 w-5"
                      src={gridViewIcon}
                      alt=" search icon"
                    />
                  </button>
                  <button className="view-button">
                    <img
                      className="h-5 w-5"
                      src={sideBarViewIcon}
                      alt=" search icon"
                    />
                  </button>
                </div>
                {/*  menu items */}
                <ul className=" flex items-center  pe-4 cursor-pointer text-base font-semibold">
                  <li className="px-1 active ">يوم</li>
                  <li className="px-1 text-gray-400 font-normal">اسبوع</li>
                  <li className="px-1 text-gray-400 font-normal">شهر</li>
                </ul>
              </div>
            </div>

            <div id="books-container" className="">
              <PaginatedItems itemsPerPage={16} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
