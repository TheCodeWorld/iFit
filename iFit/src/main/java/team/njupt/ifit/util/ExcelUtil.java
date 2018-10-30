package team.njupt.ifit.util;

import com.alibaba.fastjson.JSON;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import team.njupt.ifit.pojo.Score;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by lihang on 2017/10/8.
 */
public class ExcelUtil {

    private static Logger logger = LoggerFactory.getLogger(ExcelUtil.class);

    /**
     * 导入excel通用方法
     * @param path 导入的文件路径
     * @return
     * @throws FileNotFoundException
     */
    public static List<List<String>> importExcel(String path) throws FileNotFoundException {
        List<List<String>> dataList = new ArrayList<List<String>>();
        FileInputStream fis = new FileInputStream(path);
        try {
            boolean is03Excell = path.matches("^.+\\.(?i)(xls)$")?true:false;
            Workbook workbook = is03Excell ? new HSSFWorkbook(fis):new XSSFWorkbook(fis);
            Sheet sheet = workbook.getSheetAt(0);

            for(int r = 0;r<sheet.getLastRowNum()+1;r++){
                Row row = sheet.getRow(r);
                if (row == null||row.getFirstCellNum()==-1) {
                    continue;
                }
                List<String> rowList = new ArrayList<String>();
                /** 循环Excel的列 */
                for (int c = 0; c < sheet.getRow(0).getPhysicalNumberOfCells(); c++) {
                    Cell cell = row.getCell(c);
                    //String cellValue = "";
                    StringBuilder cellValue = new StringBuilder();
                    if (null != cell) {
                        if(cell.getCellType()!=Cell.CELL_TYPE_STRING){
                            cellValue.append(String.valueOf(cell.getNumericCellValue()));
                        }else{
                            cellValue.append(cell.getStringCellValue());
                        }
                    }
                    rowList.add(cellValue.toString());
                }
                /** 保存第r行的第c列 */
                dataList.add(rowList);
            }
        } catch (IOException e) {
            logger.error("【excle文件处理异常】：");
            e.printStackTrace();
        } finally {
            try {
                fis.close();
            } catch (IOException e) {
                logger.error("【excle文件输入流关闭异常】：");
                e.printStackTrace();
            }
        }
        return dataList;
    }

    /**
     * 导出成绩excel
     * @param scoreList
     * @param response
     */
    public static void exportSocre(List<Score> scoreList, HttpServletResponse response){
        // 第一步，创建一个webbook，对应一个Excel文件
        HSSFWorkbook wb = new HSSFWorkbook();
        // 第二步，在webbook中添加一个sheet,对应Excel文件中的sheet
        HSSFSheet sheet = wb.createSheet("学生成绩表");
        // 第三步，在sheet中添加表头第0行,注意老版本poi对Excel的行数列数有限制short
        HSSFRow row = sheet.createRow((int) 0);
        // 第四步，创建单元格，并设置值表头 设置表头居中
        Map map = (Map) JSON.parse(scoreList.get(0).getJsonScore());
        HSSFCell cell = make0Row(wb,row,map);
        for (int i = 0; i < scoreList.size(); i++)
        {
            row = sheet.createRow((int) i + 1);
            Score score = (Score) scoreList.get(i);
            Map scoreMap = (Map) JSON.parse(score.getJsonScore());
            short columnIndex = 0;
            // 第四步，创建单元格，并设置值
            row.createCell(columnIndex).setCellValue(score.getStudentId());
            row.createCell(++columnIndex).setCellValue(score.getStudentName());
            for (Object o : scoreMap.entrySet()){
                row.createCell(++columnIndex).setCellValue(((Map.Entry)o).getValue().toString());
            }
            row.createCell(++columnIndex).setCellValue(score.getYear());
            row.createCell(++columnIndex).setCellValue(score.getSumScore());
        }
        // 第六步，将文件存到指定位置
//        try
//        {
//            FileOutputStream fout = new FileOutputStream("/Users/lihang/Documents/score1.xls");
//            wb.write(fout);
//            fout.close();
//        }
//        catch (Exception e)
//        {
//            e.printStackTrace();
//        }
        OutputStream out = null;
        SimpleDateFormat sdf = null;
        try {
            sdf = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss");
            //文件名
            String fileName =scoreList.get(0).getYear()+"成绩"+"-"+sdf.format(new Date())+".xls";
            response.setContentType("application/vnd.ms-excel");
            response.setHeader("Content-Disposition", "attachment; filename="
                    + URLEncoder.encode(fileName, "UTF-8"));
            out = response.getOutputStream();
            wb.write(out);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                out.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * 组装导出excel的表头
     * @param wb
     * @param row
     * @param map
     * @return
     */
    private static HSSFCell make0Row(HSSFWorkbook wb,HSSFRow row,Map map){
        HSSFCellStyle style = wb.createCellStyle();
        style.setAlignment(HSSFCellStyle.ALIGN_CENTER); // 创建一个居中格式
        short columnIndex = 0;
        HSSFCell cell = row.createCell(columnIndex);
        cell.setCellValue("学号");
        cell.setCellStyle(style);
        cell = row.createCell(++columnIndex);
        cell.setCellValue("姓名");
        cell.setCellStyle(style);
        cell = row.createCell(++columnIndex);
        for (Object o : map.entrySet()){
            cell.setCellValue(((Map.Entry)o).getKey().toString());
            cell.setCellStyle(style);
            cell = row.createCell(++columnIndex);
        }
        cell.setCellValue("学年");
        cell.setCellStyle(style);
        cell = row.createCell(++columnIndex);
        cell.setCellValue("总分");
        cell.setCellStyle(style);
        return cell;
    }

//    public static void main(String[] args) {
//        List<Score> scoreList = new ArrayList<Score>();
//        scoreList.add(new Score(1,"1","{\"身高\":\"zhangsan\",\"体重\":\"lisi\",\"肺活量\":\"wangwu\",\"哈哈\":\"maliu\"}","lihang","2017",99.03));
//        scoreList.add(new Score(2,"2","{\"身高\":\"zhangsan\",\"体重\":\"lisi\",\"肺活量\":\"wangwu\",\"哈哈\":\"maliu\"}","lihang","2017",99.00));
//        scoreList.add(new Score(3,"3","{\"身高\":\"zhangsan\",\"体重\":\"lisi\",\"肺活量\":\"wangwu\",\"哈哈\":\"maliu\"}","lihang","2017",99.00));
//        exportSocre(scoreList);
//        String str = "{\"0\":\"zhangsan\",\"1\":\"lisi\",\"2\":\"wangwu\",\"3\":\"maliu\"}";
//        //第一种方式
//        Map maps = (Map) JSON.parse(str);
//        System.out.println("这个是用JSON类来解析JSON字符串!!!");
//        for (Object map : maps.entrySet()){
//            System.out.println(((Map.Entry)map).getKey()+"     " + ((Map.Entry)map).getValue());
//        }
//   }
}
