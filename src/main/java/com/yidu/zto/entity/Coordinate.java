package com.yidu.zto.entity;

import org.springframework.stereotype.Component;

@Component
public class Coordinate {
    private int count;
    private Integer branch_id;
    private String longitude;
    private String latitude;
    private String branch_address;
    private Integer branch_type;
    private Integer user_id;
    private String branch_phone;
    private String branch_number;
    private String parent_number;
    private String username;// VARCHAR(30) DEFAULT NULL COMMENT '用户名',
    private String userpass;// VARCHAR(30) DEFAULT NULL COMMENT '用户密码',
    private String compellation; //VARCHAR(30) DEFAULT NULL COMMENT '姓名',
    private Integer is_valid; //INT(11) DEFAULT '1' COMMENT '状态 0不可用1可用',
    private String photo; //photo` VARCHAR(50) DEFAULT NULL COMMENT '头像',

    public Integer getBranch_id() {
        return branch_id;
    }
    public void setBranch_id(Integer branch_id) {
        this.branch_id = branch_id;
    }
    public String getBranch_address() {
        return branch_address;
    }
    public void setBranch_address(String branch_address) {
        this.branch_address = branch_address;
    }
    public Integer getBranch_type() {
        return branch_type;
    }
    public void setBranch_type(Integer branch_type) {
        this.branch_type = branch_type;
    }
    public Integer getUser_id() {
        return user_id;
    }
    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }
    public String getBranch_phone() {
        return branch_phone;
    }
    public void setBranch_phone(String branch_phone) {
        this.branch_phone = branch_phone;
    }
    public String getBranch_number() {
        return branch_number;
    }
    public void setBranch_number(String branch_number) {
        this.branch_number = branch_number;
    }
    public String getParent_number() {
        return parent_number;
    }
    public void setParent_number(String parent_number) {
        this.parent_number = parent_number;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getUserpass() {
        return userpass;
    }
    public void setUserpass(String userpass) {
        this.userpass = userpass;
    }
    public String getCompellation() {
        return compellation;
    }
    public void setCompellation(String compellation) {
        this.compellation = compellation;
    }
    public Integer getIs_valid() {
        return is_valid;
    }
    public void setIs_valid(Integer is_valid) {
        this.is_valid = is_valid;
    }
    public String getPhoto() {
        return photo;
    }
    public void setPhoto(String photo) {
        this.photo = photo;
    }
    public int getCount() {
        return count;
    }
    public void setCount(int count) {
        this.count = count;
    }
    public String getLongitude() {
        return longitude;
    }
    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }
    public String getLatitude() {
        return latitude;
    }
    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    @Override
    public String toString() {
        return "Coordinate{" +
                "count=" + count +
                ", branch_id=" + branch_id +
                ", longitude='" + longitude + '\'' +
                ", latitude='" + latitude + '\'' +
                ", branch_address='" + branch_address + '\'' +
                ", branch_type=" + branch_type +
                ", user_id=" + user_id +
                ", branch_phone='" + branch_phone + '\'' +
                ", branch_number='" + branch_number + '\'' +
                ", parent_number='" + parent_number + '\'' +
                ", username='" + username + '\'' +
                ", userpass='" + userpass + '\'' +
                ", compellation='" + compellation + '\'' +
                ", is_valid=" + is_valid +
                ", photo='" + photo + '\'' +
                '}';
    }
}
