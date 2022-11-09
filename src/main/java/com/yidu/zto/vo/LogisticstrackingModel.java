package com.yidu.zto.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.io.Serializable;

/**
 * (Logisticstracking)实体类
 *
 * @author makejava
 * @since 2021-05-24 20:16:08
 */
public class Logisticstracking implements Serializable {
    private static final long serialVersionUID = -33364322908109540L;
    /**
     * 物流跟踪中间表id
     */
    private Integer id;
    /**
     * 包裹id
     */
    private Integer parcelId;
    /**
     * 当前位置
     */
    private String currentlocation;
    /**
     * 下一站
     */
    private String nextstation;
    /**
     * 操作员名字
     */
    private String username;
    /**
     * 物流信息
     */
    private String message;
    /**
     * 更新时间
     */
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")//不转换使用springmvc时他不会将字符串转为date 导致400错误
    private Date updateDate;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getParcelId() {
        return parcelId;
    }

    public void setParcelId(Integer parcelId) {
        this.parcelId = parcelId;
    }

    public String getCurrentlocation() {
        return currentlocation;
    }

    public void setCurrentlocation(String currentlocation) {
        this.currentlocation = currentlocation;
    }

    public String getNextstation() {
        return nextstation;
    }

    public void setNextstation(String nextstation) {
        this.nextstation = nextstation;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    @Override
    public String toString() {
        return "Logisticstracking{" +
                "id=" + id +
                ", parcelId=" + parcelId +
                ", currentlocation='" + currentlocation + '\'' +
                ", nextstation='" + nextstation + '\'' +
                ", username='" + username + '\'' +
                ", message='" + message + '\'' +
                ", updateDate=" + updateDate +
                '}';
    }
}
