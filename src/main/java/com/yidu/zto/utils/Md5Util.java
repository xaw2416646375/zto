package com.yidu.zto.utils;

import java.security.MessageDigest;
import java.util.Base64;
/**
 * @author XiongAiWen
 * @version 1.0
 * @description:
 * @data 2021/4/12 9:10
 */
public class Md5Util {

	/**
	 * 通过MD5算法加密字符串
	 *
	 *
	 * 乐字节：专注线上IT培训
	 * 答疑老师微信：lezijie
	 * @param msg
	 * @return java.lang.String
	 */
	public static String encode(String msg){
		try {
			MessageDigest messageDigest=MessageDigest.getInstance("md5");
			return Base64.getEncoder().encodeToString(messageDigest.digest(msg.getBytes())) ;
		}catch (Exception e){
			e.printStackTrace();
			return null;
		}
	}
	
	
	public static void main(String[] args) {
		System.out.println(encode("123456"));
	}

}
