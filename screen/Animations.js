import React, { useState, useEffect, Animated } from 'react';

const animateBounce = ()=>{
    const animation = new Animated.Value(0);
    useEffect(()=>{
        const style = Animated.spring(animation, {
            toValue: 1,
            friction: 4,
            tension: 40,
            useNativeDriver: true
        }).start();
    })
    return animation;
};