package com.yidu.zto.exceptions;


/**
 * 自定义参数异常类
 */
public class ParamsException extends RuntimeException {
    private Integer code=300;
    private String msg="参数异常!";


    public ParamsException() {
        super("参数异常!");
    }

    public ParamsException(String msg) {
        super(msg);
        this.msg = msg;
    }

    public ParamsException(Integer code) {
        super("参数异常!");
        this.code = code;
    }

    public ParamsException(Integer code, String msg) {
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
