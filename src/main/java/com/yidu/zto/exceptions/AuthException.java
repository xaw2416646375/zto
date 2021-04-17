package com.yidu.zto.exceptions;


/**
 * 自定义权限异常类
 */
public class AuthException extends RuntimeException {
    private Integer code=400;
    private String msg="暂无权限!";


    public AuthException() {
        super("暂无权限!");
    }

    public AuthException(String msg) {
        super(msg);
        this.msg = msg;
    }

    public AuthException(Integer code) {
        super("暂无权限!");
        this.code = code;
    }

    public AuthException(Integer code, String msg) {
        super(msg);
        this.code = code;
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    /*重写fillInStackTrace方法 打印错误时则只会打印头部重要信息*/
    @Override
    public synchronized Throwable fillInStackTrace() {
        return this;
    }
}
