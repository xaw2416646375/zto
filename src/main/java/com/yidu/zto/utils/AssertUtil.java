package com.yidu.zto.utils;


import com.yidu.zto.exceptions.ParamsException;

/**
 * @author XiongAiWen
 * @version 1.0
 * @description:校验类
 * @data 2021/4/12 9:10
 */
public class AssertUtil {


    /**
     * 判断条件是否满足
     *  如果条件满足，则抛出参数异常
     *
     *
     * 乐字节：专注线上IT培训
     * 答疑老师微信：lezijie
     * @param flag
     * @param msg
     * @return void
     */
    public  static void isTrue(Boolean flag, String msg){
        if(flag){
            throw  new ParamsException(msg);
        }
    }

}
