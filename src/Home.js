import React, { Fragment, CSSProperties, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import './home.css'
import b1 from './img/banner1.webp'
import b2 from './img/banner2.webp'
import b3 from './img/banner3.jpg'
import b4 from './img/banner4.jpg'
import b5 from './img/banner5.jpg'
import b6 from './img/banner6.webp'
import b7 from './img/banner.7.webp'
import b8 from './img/banner8.webp'
import b9 from './img/banner9.webp'
import d1 from './img/d1.webp'
import d2 from './img/d2.webp'
import d3 from './img/d3.webp'
import d4 from './img/d4.webp'
import d5 from './img/d5.webp'
import d6 from './img/d6.webp'
import d7 from './img/d7.webp'
import d8 from './img/d8.webp'
import a1 from './img/a1.webp'
import a2 from './img/a2.webp'
import a3 from './img/a3.webp'
import a4 from './img/a4.webp'
import a5 from './img/a5.webp'
import a6 from './img/a6.webp'
import a7 from './img/a7.webp'
import a8 from './img/a8.webp'
import a9 from './img/a9.webp'
import a10 from './img/a10.webp'
import a11 from './img/a11.webp'
import a12 from './img/a12.webp'
import a13 from './img/a13.webp'
import a14 from './img/a14.webp'
import a15 from './img/a15.webp'
import a16 from './img/a16.webp'
import c1 from './img/c1.webp'
import c2 from './img/c2.webp'
import c3 from './img/c3.webp'
import c4 from './img/c4.webp'
import c5 from './img/c5.webp'
import c6 from './img/c6.webp'
import c7 from './img/c7.webp'
import c8 from './img/c8.webp'
import c9 from './img/c9.webp'
import c10 from './img/c10.webp'
import c11 from './img/c11.webp'
import c12 from './img/c12.webp'
import c13 from './img/c13.webp'
import c14 from './img/c14.webp'
import c15 from './img/c15.webp'
import c16 from './img/c16.webp'
import c17 from './img/c17.webp'
import c18 from './img/c18.webp'
import c19 from './img/c19.webp'
import c20 from './img/c20.webp'
import c21 from './img/c21.webp'
import c22 from './img/c22.webp'
import c23 from './img/c23.webp'
import c24 from './img/c24.webp'
import bb1 from './img/b1.webp'
import bb2 from './img/b2.webp'
import bb3 from './img/b3.webp'
import bb4 from './img/b4.webp'
import bb5 from './img/b5.webp'
import bb6 from './img/b6.webp'
import bb7 from './img/b7.webp'
import e1 from './img/e1.webp'
import e2 from './img/e2.webp'
import e3 from './img/e3.webp'
import e4 from './img/e4.webp'
import e5 from './img/e5.webp'
import e6 from './img/e6.webp'
import e7 from './img/e7.webp'
import e8 from './img/e8.webp'
import e9 from './img/e9.webp'
import e10 from './img/e10.webp'
import e11 from './img/e11.webp'
import e12 from './img/e12.webp'
import e13 from './img/e13.webp'
import e14 from './img/e14.webp'
import e15 from './img/e15.webp'
import e16 from './img/e16.webp'
import e17 from './img/e17.webp'
import e18 from './img/e18.webp'
import e19 from './img/e19.webp'
import e20 from './img/e20.webp'
import e21 from './img/e21.webp'
import e22 from './img/e22.webp'
import e23 from './img/e23.webp'
import e24 from './img/e24.webp'
import f1 from './img/f1.webp'
import f2 from './img/f2.webp'
import f3 from './img/f3.webp'
import f4 from './img/f4.webp'
import f5 from './img/f5.webp'
import f6 from './img/f6.webp'
import f7 from './img/f7.webp'
import f8 from './img/f8.webp'
import f9 from './img/f9.webp'
import f10 from './img/f10.webp'
import f11 from './img/f11.webp'
import f12 from './img/f12.webp'
import f13 from './img/f13.webp'
import f14 from './img/f14.webp'
import g1 from './img/g1.webp'
import g2 from './img/g2.webp'
import g3 from './img/g3.webp'
import g4 from './img/g4.webp'
import g5 from './img/g5.webp'
import g6 from './img/g6.webp'
import g7 from './img/g7.webp'
import g8 from './img/g8.webp'
import g9 from './img/g9.webp'
import g10 from './img/g10.webp'
import g11 from './img/g11.webp'
import g12 from './img/g12.webp'
import g13 from './img/g13.webp'
import g14 from './img/g14.webp'
import g15 from './img/g15.webp'
import g16 from './img/g16.webp'
import h1 from './img/h1.webp'
import h2 from './img/h2.webp'
import h3 from './img/h3.webp'
import h4 from './img/h4.webp'
import h5 from './img/h5.webp'
import h6 from './img/h6.webp'
import h7 from './img/h7.webp'
import h8 from './img/h8.webp'
import h9 from './img/h9.webp'
import h10 from './img/h10.webp'
import h11 from './img/h11.webp'
import h12 from './img/h12.webp'
import h13 from './img/h13.webp'
import h14 from './img/h14.webp'
import h15 from './img/h15.webp'
import h16 from './img/h16.webp'
import i1 from './img/i1.webp'
import i2 from './img/i2.webp'
import i3 from './img/i3.webp'
import i4 from './img/i4.webp'
import i5 from './img/i5.webp'
import j1 from './img/j1.webp'
import j2 from './img/j2.webp'
import j3 from './img/j3.webp'
import j4 from './img/j4.webp'
import k1 from './img/k1.webp'
import k2 from './img/k2.webp'
import k3 from './img/k3.webp'
import k4 from './img/k4.webp'
import k5 from './img/k5.webp'
import k6 from './img/k6.webp'
import k7 from './img/k7.webp'
import k8 from './img/k8.jpg'
import k9 from './img/k9.webp'
import k10 from './img/k10.webp'
import k11 from './img/k11.webp'
import k12 from './img/k12.jpg'
import k13 from './img/k13.webp'
import k14 from './img/k14.jpg'
import k15 from './img/k15.webp'
import k16 from './img/k16.webp'
import l1 from './img/l1.jpg'
import l2 from './img/l2.jpg'
import l3 from './img/l3.jpg'
import l4 from './img/l4.jpg'
import l5 from './img/l5.jpg'
import l6 from './img/l6.jpg'
import l7 from './img/l7.jpg'
import m1 from './img/m1.webp'
import m2 from './img/m2.webp'
import m3 from './img/m3.webp'
import m4 from './img/m4.webp'
import m5 from './img/m5.webp'
import m6 from './img/m6.webp'
import m7 from './img/m7.webp'
import m8 from './img/m8.webp'
import n1 from './img/n1.webp'
import n2 from './img/n2.webp'
import n3 from './img/n3.jpg'
import n4 from './img/n4.webp'
import n5 from './img/n5.webp'
import n6 from './img/n6.webp'
import n7 from './img/n7.webp'
import n8 from './img/n8.webp'
import o1 from './img/o1.webp'
import o2 from './img/o2.webp'
import o3 from './img/o3.webp'
import o4 from './img/o4.webp'
import o5 from './img/o5.webp'
import o6 from './img/o6.webp'
import o7 from './img/o7.jpg'
import p1 from './img/p1.webp'
import p2 from './img/p2.webp'
import p3 from './img/p3.webp'
import p4 from './img/p4.webp'
import p5 from './img/p5.webp'
import p6 from './img/p6.webp'
import p7 from './img/p7.webp'
import p8 from './img/p8.webp'
import q1 from './img/q1.webp'
import q2 from './img/q2.webp'
import q3 from './img/q3.webp'
import q4 from './img/q4.webp'
import q5 from './img/q5.webp'
import q6 from './img/q6.webp'
import q7 from './img/q7.webp'
import q8 from './img/q8.webp'
import r1 from './img/r1.webp'
import r2 from './img/r2.webp'
import r3 from './img/r3.webp'
import r4 from './img/r4.webp'
import r5 from './img/r5.webp'
import r6 from './img/r6.webp'
import r7 from './img/r7.webp'
import r8 from './img/r8.webp'
import s1 from './img/s1.webp'
import s2 from './img/s2.webp'
import s3 from './img/s3.webp'
import s4 from './img/s4.webp'
import s5 from './img/s5.webp'
import s6 from './img/s6.webp'
import s7 from './img/s7.webp'
import s8 from './img/s8.webp'
import t1 from './img/t1.webp'
import t2 from './img/t2.webp'
import t3 from './img/t3.webp'
import t4 from './img/t4.webp'
import t5 from './img/t5.webp'
import t6 from './img/t6.webp'
import t7 from './img/t7.webp'
import t8 from './img/t8.webp'
import u1 from './img/u1.webp'
import u2 from './img/u2.webp'
import u3 from './img/u3.webp'
import u4 from './img/u4.jpg'
import u5 from './img/u5.webp'
import u6 from './img/u6.webp'
import u7 from './img/u7.webp'
import u8 from './img/u8.webp'
import mb1 from './img/mb1.jpg'
import mb2 from './img/mb2.jpg'
import mb3 from './img/mb3.jpg'
import ma1 from './img/ma1.webp'
import ma2 from './img/ma2.webp'
import ma3 from './img/ma3.webp'
import ma4 from './img/ma4.webp'
import ma5 from './img/ma5.webp'
import ma6 from './img/ma6.webp'
import ma7 from './img/ma7.webp'
import ma8 from './img/ma8.webp'
import ma9 from './img/ma9.webp'
import ma10 from './img/ma10.webp'
import ma11 from './img/ma11.webp'
import mm3 from './img/mm3.jpg'
import mad1 from './img/mad1.jpg'
import mm1_1 from './img/mm1-1.gif'
import mm1_2 from './img/mm1-2.gif'
import mm2_1 from './img/mm2-1.gif'
import mm2_2 from './img/mm2-2.gif'
import mc1 from './img/mc1.webp'
import mc2 from './img/mc2.webp'
import mc3 from './img/mc3.webp'
import mc4 from './img/mc4.jpg'
import mc5 from './img/mc5.webp'
import mc6 from './img/mc6.webp'
import mc7 from './img/mc7.webp'
import mc8 from './img/mc8.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Login from './pages/Login'
import { useLogin } from './context/LoginContext';



const Home = () => {

  // const { showLogin } = useLogin();
  const indicatorStyles: CSSProperties = {
    background: '#CFCECD',
    width: 7,
    height: 7,
    borderRadius: 50,
    display: 'inline-block',
    margin: '0 4px 0 4px',
    zIndex: 8
  };
  const { showLogin } = useLogin();
  // #CFCECD
  function indicator(onClickHandler, isSelected, index, label) {
    if (isSelected) {
      return (
        <li
          style={{ ...indicatorStyles, background: '#9f9f9f' }}
          aria-label={`Selected: ${label} ${index + 1}`}
          title={`Selected: ${label} ${index + 1}`}
        />
      );
    }

    return (

      <li
        style={{ ...indicatorStyles }}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  }

  useEffect(() => {
    document.documentElement.scrollTo = 0;
  }, []);
  return (
    <div className={`bg-white w-[100%] h-[100vh] sm:ml-[5px] ${showLogin ? 'overflow-hidden' : 'overflow-y-scroll'}`}>
      {showLogin && (
        <div className='flex z-1 justify-center items-center'>
          <Login />
        </div>
      )}
      <div className={` ${showLogin ? 'filter blur-sm pointer-events-none ' : ''}`}>
        <Fragment>

          {
            window.screen.width > 1024 ?

              <Fragment >


                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8'>DEAL OF THE DAY</h1>
                  <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-3 xs:grid-cols-2 md:grid-cols-3 sl:grid-cols-2'>
                    <Link to='/products'><LazyLoadImage effect=' ' src={d1} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={d2} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={d3} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={d4} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={d5} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={d6} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={d7} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={d8} alt="" className="min-h-[200px]" /></Link>
                  </div>
                </div>
                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>BEST OF MYNTRA EXCLUSIVE BRANDS</h1>
                  <div className='grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-3 xs:grid-cols-2 md:grid-cols-3 sl:grid-cols-2'>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a1} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a2} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a3} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a4} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a5} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a6} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a7} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a8} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a9} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a10} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a11} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a12} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a13} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a14} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a15} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={a16} alt="" className="min-h-[200px]" /></Link>
                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>TOP PICKS</h1>
                  <div className='grid grid-cols-7 gap-2 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-3 xs:grid-cols-2 md:grid-cols-3 sl:grid-cols-2'>
                    <Link to='/products'><LazyLoadImage effect=' ' src={bb1} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={bb2} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={bb3} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={bb4} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={bb5} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={bb6} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={bb7} alt="" className="min-h-[200px]" /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>CATEGORIES TO BAG</h1>
                  <div className='grid grid-cols-5 gap-1 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-3 xs:grid-cols-2 md:grid-cols-3 sl:grid-cols-2'>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c1} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c2} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c3} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c4} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c5} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c6} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c7} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c8} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c9} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c10} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c11} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c12} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c13} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c14} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c15} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c16} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c17} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c18} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c19} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c20} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c21} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c22} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c23} alt="" className="min-h-[200px]" /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={c24} alt="" className="min-h-[200px]" /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>DEALS ON TOP BRANDS</h1>
                  <div className='grid grid-cols-5 gap-1 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-3 xs:grid-cols-2 md:grid-cols-3 sl:grid-cols-2'>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e8} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e9} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e10} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e11} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e12} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e13} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e14} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e15} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e16} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e17} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e18} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e19} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e20} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e21} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e22} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e23} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={e24} alt="" className='min-h-[200px]' /></Link>
                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>BRANDS AT SLASHED PRICES</h1>
                  <div className='grid grid-cols-7 gap-1 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-3 xs:grid-cols-2 md:grid-cols-3 sl:grid-cols-2'>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f8} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f9} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f10} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f11} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f12} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f13} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={f14} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>BEST BUYS</h1>
                  <div className='grid grid-cols-5 gap-1'>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g8} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g9} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g10} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g11} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g12} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g13} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g14} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g15} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={g16} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>MYNTRA LUXE</h1>
                  <div className='grid grid-cols-5 gap-1'>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h8} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h9} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h10} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h11} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h12} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h13} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h14} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h15} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={h16} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>GIFTING CARDS</h1>
                  <div className='grid grid-cols-5 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={i1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={i2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={i3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={i4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={i5} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>DEALS ON LATEST ARRIVALS</h1>
                  <div className='grid grid-cols-2 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={j1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={j2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={j3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={j4} alt="" className='min-h-[200px]' /></Link>


                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>SPRING SUMMER 2022- FIRST ON MYNTRA</h1>
                  <div className='grid grid-cols-5 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k8} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k9} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k10} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k11} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k12} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k13} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k14} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k15} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={k16} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>STYLECAST HOTTEST FINDS</h1>
                  <div className='grid grid-cols-7 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={l1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={l2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={l3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={l4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={l5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={l6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={l7} alt="" className='min-h-[200px]' /></Link>


                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>TRENDS FOR HER</h1>
                  <div className='grid grid-cols-5 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={m1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={m2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={m3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={m4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={m5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={m6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={m7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={m8} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>TRENDS FOR HIM</h1>
                  <div className='grid grid-cols-5 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={n1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={n2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={n3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={n4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={n5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={n6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={n7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={n8} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>BEST OF KIDSWEAR</h1>
                  <div className='grid grid-cols-7 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={o1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={o2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={o3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={o4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={o5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={o6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={o7} alt="" className='min-h-[200px]' /></Link>


                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>NEW IN TOP BRANDS</h1>
                  <div className='grid grid-cols-5 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={p1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={p2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={p3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={p4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={p5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={p6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={p7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={p8} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>SPRING SUMMER SEASON CHECKLIST</h1>
                  <div className='grid grid-cols-5 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={q1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={q2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={q3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={q4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={q5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={q6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={q7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={q8} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>NEWNESS FOR EVERY OCCASION</h1>
                  <div className='grid grid-cols-4 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={r1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={r2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={r3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={r4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={r5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={r6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={r7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={r8} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>LATEST IN BEAUTY & GROOMING</h1>
                  <div className='grid grid-cols-4 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={s1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={s2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={s3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={s4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={s5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={s6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={s7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={s8} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>


                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>UNMISSABLE THIS SEASON</h1>
                  <div className='grid grid-cols-5 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={t1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={t2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={t3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={t4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={t5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={t6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={t7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={t8} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>

                <div>
                  <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>COLOURS OF THE SEASON</h1>
                  <div className='grid grid-cols-4 '>
                    <Link to='/products'><LazyLoadImage effect=' ' src={u1} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={u2} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={u3} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={u4} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={u5} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={u6} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={u7} alt="" className='min-h-[200px]' /></Link>
                    <Link to='/products'><LazyLoadImage effect=' ' src={u8} alt="" className='min-h-[200px]' /></Link>

                  </div>
                </div>



              </Fragment>

              :

              <Fragment>

                <div className='bg-white '>
                  <ul className='flex overflow-x-scroll '>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={ma1} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={ma2} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={ma3} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={ma4} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={ma5} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={ma6} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={ma7} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={ma8} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={ma9} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={ma10} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={ma11} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                  </ul>
                </div>

                <div>
                  <LazyLoadImage effect=' ' src={mm3} alt="" className='mt-2 min-h-[100px]' />
                </div>



                <div>
                  <h1 className='text-xl px-8 font-bold font1 text-center text-slate-800 mb-6 mt-6'>DEAL OF THE DAY</h1>
                  <ul className='flex overflow-x-scroll '>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={d1} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={d2} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={d3} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={d4} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={d5} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={d6} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={d7} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={d8} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                  </ul>
                </div>

                <div>
                  <h1 className='text-xl px-8 font-bold font1 text-center text-slate-800 mb-6 mt-6'>BEST OF MYNTRA EXCLUSIVE BRANDS</h1>
                  <ul className='flex overflow-x-scroll '>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a1} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a2} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a3} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a4} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a5} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a6} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a7} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a8} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a9} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a10} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a11} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a12} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a13} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a14} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a15} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={a16} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>

                  </ul>
                </div>


                <div>
                  <h1 className='text-xl px-8 font-bold font1 text-center text-slate-800 mb-6 mt-6'>TOP PICKS</h1>
                  <ul className='flex overflow-x-scroll '>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={bb1} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={bb2} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={bb3} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={bb4} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={bb5} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={bb6} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                    <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect=' ' src={bb7} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>

                  </ul>
                </div>

                <div className='mt-4 grid grid-cols-2 min-h-[200px]'>
                  <LazyLoadImage effect=' ' src={mm1_1} alt="" />
                  <LazyLoadImage effect=' ' src={mm1_2} alt="" />
                </div>

                <div>
                  <LazyLoadImage effect=' ' src={mad1} alt="" />
                </div>

                <div className='mt-4 grid grid-cols-2 min-h-[200px]'>
                  <LazyLoadImage effect=' ' src={mm2_1} alt="" />
                  <LazyLoadImage effect=' ' src={mm2_2} alt="" />
                </div>

                <div>
                  <h1 className='text-xl px-8 font-bold font1 text-center text-slate-800 mb-6 mt-6'>CATEGORIES TO BAG</h1>
                  <ul className='grid grid-cols-3 '>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c1} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c2} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c3} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c4} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c5} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c6} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c7} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c8} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c9} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c10} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c11} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c12} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c13} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c14} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c15} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c16} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c17} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c18} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c19} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c20} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c21} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c22} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c23} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={c24} alt="" className="min-h-[100px]" /></li></Link>

                  </ul>
                </div>

                <div>
                  <h1 className='text-xl px-8 font-bold font1 text-center text-slate-800 mb-6 mt-6'>DEALS ON LATEST ARRIVALS</h1>
                  <ul className='grid grid-cols-1 '>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={j1} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={j2} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={j3} alt="" className="min-h-[100px]" /></li></Link>
                    <Link to='/products'><li className=''><LazyLoadImage effect=' ' src={j4} alt="" className="min-h-[100px]" /></li></Link>


                  </ul>
                </div>


              </Fragment>
          }

        </Fragment>
      </div>
    </div>
  );
}

export default Home