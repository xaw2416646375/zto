package com.yidu.zto.vo;

import java.util.List;

public class Addressjson {
    private int code;
    private String msg;
    private List<Address_01> data;
    private String uid;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public List<Address_01> getData() {
        return data;
    }

    public void setData(List<Address_01> data) {
        this.data = data;
    }
}
