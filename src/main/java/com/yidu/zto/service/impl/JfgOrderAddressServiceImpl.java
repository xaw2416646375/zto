package com.yidu.zto.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.yidu.zto.dao.JfgAddressMapper;
import com.yidu.zto.dao.JfgOrderMapper;
import com.yidu.zto.dao.JfgParcelMapper;
import com.yidu.zto.entity.*;
import com.yidu.zto.dao.JfgOrderAddressMapper;
import com.yidu.zto.service.JfgOrderAddressService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Random;

import static java.lang.Double.parseDouble;

/**
 * (OrderAddress)表服务实现类
 *
 * @author makejava
 * @since 2021-04-20 22:27:16
 */
@Service("orderAddressService")
public class JfgOrderAddressServiceImpl implements JfgOrderAddressService {
    @Resource
    private JfgOrderAddressMapper jfgOrderAddressMapper;
    @Resource
    private JfgParcelMapper jfgParcelMapper;
    @Resource
    private JfgAddressMapper jfgAddressMapper;
    @Resource
    private JfgOrderMapper jfgOrderMapper;
    /**
     * 通过ID查询单条数据
     *
     * @param orderAddressId 主键
     * @return 实例对象
     */
    @Override
    public OrderAddress queryById(Integer orderAddressId) {
        return this.jfgOrderAddressMapper.queryById(orderAddressId);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    @Override
    public List<OrderAddress> queryAllByLimit(int offset, int limit) {
        return this.jfgOrderAddressMapper.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param orderModel 实例对象
     * @return 实例对象
     */
    @Override
    public int insert(OrderModel orderModel) {
        //得到寄件地址并分割
        String[] splitAddress = orderModel.getProvince().split("/");
        //得到收件地址并分割
        String[] splitAddressTwo = orderModel.getShouProvince().split("/");

        //创建订单地址对象
        OrderAddress orderAddress=new OrderAddress();
        //设置地址类型
        orderAddress.setAddressType(1);
        //设置市
        orderAddress.setCity(splitAddress[1]);
        //设置详细寄件地址
        orderAddress.setDetailAddress(orderModel.getDetailAddress());
        //设置区/县
        orderAddress.setDistrict(splitAddress[2]);
        //设置寄件号码
        orderAddress.setPhone(orderModel.getPhone());
        //设置省
        orderAddress.setProvince(splitAddress[0]);
        //设置寄件人
        orderAddress.setSendReceiveMan(orderModel.getSendReceiveMan());
        //设置客户id
        orderAddress.setCustomerId(1);

        //创建订单地址对象
        OrderAddress orderAddressTwo=new OrderAddress();
        //设置地址类型
        orderAddressTwo.setAddressType(0);
        //设置市
        orderAddressTwo.setCity(splitAddressTwo[1]);
        //设置详细收件地址
        orderAddressTwo.setDetailAddress(orderModel.getShouDetailAddress());
        //设置区/县
        orderAddressTwo.setDistrict(splitAddressTwo[2]);
        //设置收件号码
        orderAddressTwo.setPhone(orderModel.getShouPhone());
        //设置省
        orderAddressTwo.setProvince(splitAddressTwo[0]);
        //设置收件人
        orderAddressTwo.setSendReceiveMan(orderModel.getShouSendReceiveMan());
        //设置客户id
        orderAddressTwo.setCustomerId(1);
        //调用新增订单地址的方法
        int insert3 = this.jfgOrderAddressMapper.insert(orderAddress);
        //查询地址出订单地址
        OrderAddress orderAddress1 = this.jfgOrderAddressMapper.queryAllById(1,insert3);
        //调用新增订单地址的方法
        int insert4 = this.jfgOrderAddressMapper.insert(orderAddressTwo);
        //查询地址出订单地址
        OrderAddress orderAddress2 = this.jfgOrderAddressMapper.queryAllById(1,insert4);
        //如果选择保存不为空则新增寄件地址
        if(orderModel.getQueDing()!=null){
            //创建地址对象
            Address address=new Address();
            //设置地址类型
            address.setAddressType(1);
            //设置市
            address.setCity(splitAddress[1]);
            //设置详细寄件地址
            address.setDetailAddress(orderModel.getDetailAddress());
            //设置区/县
            address.setDistrict(splitAddress[2]);
            //设置寄件号码
            address.setPhone(orderModel.getPhone());
            //设置省
            address.setProvince(splitAddress[0]);
            //设置寄件人
            address.setSendReceiveMan(orderModel.getSendReceiveMan());
            //设置客户id
            address.setCustomerId(1);
            //调用查询地址是否存在的方法
            Address address1 = this.jfgAddressMapper.queryByEx(address);
            //判断地址是否为空
            if (address1==null){
                //调用新增地址
                this.jfgAddressMapper.insert(address);
            }else{
                //设置地址id
                address.setAddressId(address1.getAddressId());
                //存在调用修改
                this.jfgAddressMapper.update(address);
            }
        }
        //如果选择保存不为空则新增收件地址
        if(orderModel.getShouQueDing()!=null){
            //创建地址对象
            Address addressTwo=new Address();
            //设置地址类型
            addressTwo.setAddressType(0);
            //设置市
            addressTwo.setCity(splitAddressTwo[1]);
            //设置详细收件地址
            addressTwo.setDetailAddress(orderModel.getShouDetailAddress());
            //设置区/县
            addressTwo.setDistrict(splitAddressTwo[2]);
            //设置收件号码
            addressTwo.setPhone(orderModel.getShouPhone());
            //设置省
            addressTwo.setProvince(splitAddressTwo[0]);
            //设置收件人
            addressTwo.setSendReceiveMan(orderModel.getShouSendReceiveMan());
            //设置客户id
            addressTwo.setCustomerId(1);
            //调用查询地址是否存在的方法
            Address address2 = this.jfgAddressMapper.queryByEx(addressTwo);
            //判断地址是否为空
            if (address2==null){
                //调用新增地址
                this.jfgAddressMapper.insert(addressTwo);
            }else {
                //设置地址id
                addressTwo.setAddressId(address2.getAddressId());
                //存在调用修改
                this.jfgAddressMapper.update(addressTwo);
            }
        }

        //得到时间
        String sdf=new SimpleDateFormat("MMddHHmmss").format(new Date());

        //创建随机数类
        Random random=new Random();
        //随机99
        int a = random.nextInt(99);
        int b = (random.nextInt(9) + 1) * 100+a;
        int c = random.nextInt(899)+100;
        //得到快递单号
        String expressNumber="ZTO"+c+sdf;
        //创建订单对象
        Order order=new Order();
        //设置客户id
        order.setCustomerId(1);
        //设置订单号
        order.setOrdernumber(sdf+b);
        //快递单号
        order.setExpressnumber(expressNumber);
        //订单状态
        order.setOrderstate(1);
        //收方地址id
        order.setReceiceAddressid(orderAddress2.getOrderAddressId());
        //寄方地址id
        order.setSendAddressid(orderAddress1.getOrderAddressId());
        //调用新增订单的方法
        int okOrder = this.jfgOrderMapper.insert(order);
        //创建物品对象
        Parcel parcel=new Parcel();
        //设置重量
        parcel.setWeight(orderModel.getWeight());
        //设置物品类型
        parcel.setGoodsType(orderModel.getGoodsType());
        //设置备注
        parcel.setRemarks(orderModel.getRemarks());
        //查出订单的消息装入集合
        Order orders = this.jfgOrderMapper.queryAllById(1);
        //设置订单id
        parcel.setOrderid(orders.getOrderid());
        //调用新增包裹的方法
        int okParcel = this.jfgParcelMapper.insert(parcel);
        //判断新增成功返回1
        if(okOrder>0&&okParcel>0){
            return 1;
        }
        return 0;
    }

    @Override
    public int insertBatch(OrderModel orderModel) {
        //得到寄件地址并分割
        String[] splitAddress = orderModel.getProvince().split("/");
        //创建订单地址对象
        OrderAddress orderAddress=new OrderAddress();
        //设置地址类型
        orderAddress.setAddressType(1);
        //设置市
        orderAddress.setCity(splitAddress[1]);
        //设置详细寄件地址
        orderAddress.setDetailAddress(orderModel.getDetailAddress());
        //设置区/县
        orderAddress.setDistrict(splitAddress[2]);
        //设置寄件号码
        orderAddress.setPhone(orderModel.getPhone());
        //设置省
        orderAddress.setProvince(splitAddress[0]);
        //设置寄件人
        orderAddress.setSendReceiveMan(orderModel.getSendReceiveMan());
        //设置客户id
        orderAddress.setCustomerId(1);

        //调用新增订单地址的方法
        int insert3 = this.jfgOrderAddressMapper.insert(orderAddress);
        //查询地址出订单地址
        OrderAddress orderAddress1 = this.jfgOrderAddressMapper.queryAllById(1,insert3);

        //如果选择保存不为空则新增寄件地址
        if(orderModel.getQueDing()!=null){
            //创建地址对象
            Address address=new Address();
            //设置地址类型
            address.setAddressType(1);
            //设置市
            address.setCity(splitAddress[1]);
            //设置详细寄件地址
            address.setDetailAddress(orderModel.getDetailAddress());
            //设置区/县
            address.setDistrict(splitAddress[2]);
            //设置寄件号码
            address.setPhone(orderModel.getPhone());
            //设置省
            address.setProvince(splitAddress[0]);
            //设置寄件人
            address.setSendReceiveMan(orderModel.getSendReceiveMan());
            //设置客户id
            address.setCustomerId(1);
            //调用查询地址是否存在的方法
            Address address1 = this.jfgAddressMapper.queryByEx(address);
            //判断地址是否为空
            if (address1==null){
                //调用新增地址
                this.jfgAddressMapper.insert(address);
            }else{
                //设置地址id
                address.setAddressId(address1.getAddressId());
                //存在调用修改
                this.jfgAddressMapper.update(address);
            }
        }

        //创建随机数类
        Random random=new Random();
        //将json格式转化成Data对象
        List<Data> dataList = JSONObject.parseArray(orderModel.getData(), Data.class);
        //循环出Data集合
        for (Data data1 : dataList) {
            if(data1.getName()!=null||data1.getProvince()!=null) {
                //创建订单地址对象
                OrderAddress orderAddressTwo = new OrderAddress();
                //设置地址类型
                orderAddressTwo.setAddressType(0);
                //设置市
                orderAddressTwo.setCity(data1.getCity());
                //设置详细收件地址
                orderAddressTwo.setDetailAddress(data1.getDetailAddress());
                //设置区/县
                orderAddressTwo.setDistrict(data1.getDistrict());
                //设置收件号码
                orderAddressTwo.setPhone(data1.getPhone());
                //设置省
                orderAddressTwo.setProvince(data1.getProvince());
                //设置收件人
                orderAddressTwo.setSendReceiveMan(data1.getName());
                //设置客户id
                orderAddressTwo.setCustomerId(1);
                //调用新增订单地址的方法
                int insert4 = this.jfgOrderAddressMapper.insert(orderAddressTwo);
                //查询地址出订单地址
                OrderAddress orderAddress2 = this.jfgOrderAddressMapper.queryAllById(1, insert4);
                //得到时间
                String sdf = new SimpleDateFormat("MMddHHmmss").format(new Date());
                //随机99
                int a = random.nextInt(99);
                int b = (random.nextInt(9) + 1) * 100 + a;
                int c = random.nextInt(899) + 100;
                //得到快递单号
                String expressNumber = "ZTO" + c + sdf;
                //创建订单对象
                Order order = new Order();
                //设置客户id
                order.setCustomerId(1);
                //设置订单号
                order.setOrdernumber(sdf + b);
                //快递单号
                order.setExpressnumber(expressNumber);
                //订单状态
                order.setOrderstate(1);
                //收方地址id
                order.setReceiceAddressid(orderAddress2.getOrderAddressId());
                //寄方地址id
                order.setSendAddressid(orderAddress1.getOrderAddressId());
                //调用新增订单的方法
                int okOrder = this.jfgOrderMapper.insert(order);
                //创建物品对象
                Parcel parcel = new Parcel();
                //设置重量
                parcel.setWeight(parseDouble(data1.getWeight()));
                //设置物品类型
                parcel.setGoodsType(5);
                //设置物品名字
                parcel.setGoodsName(data1.getGoodsName());
                //查出订单的消息
                Order orders = this.jfgOrderMapper.queryAllById(1);
                //设置订单id
                parcel.setOrderid(orders.getOrderid());
                //调用新增包裹的方法
                int okParcel = this.jfgParcelMapper.insert(parcel);
            }

        }
        return 0;
    }

    /**
     * 修改数据
     *
     * @param orderAddress 实例对象
     * @return 实例对象
     */
    @Override
    public OrderAddress update(OrderAddress orderAddress) {
        this.jfgOrderAddressMapper.update(orderAddress);
        return this.queryById(orderAddress.getOrderAddressId());
    }

    /**
     * 通过主键删除数据
     *
     * @param orderAddressId 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer orderAddressId) {
        return this.jfgOrderAddressMapper.deleteById(orderAddressId) > 0;
    }

}
