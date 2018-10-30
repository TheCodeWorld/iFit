package team.njupt.ifit.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

/**
 * Created by lihang on 2017/10/8.
 */
public class UploadUtil {
    private static Logger logger = LoggerFactory.getLogger(UploadUtil.class);
    public static String upload(MultipartFile file, String path){
        String fileName = file.getOriginalFilename();
        //拓展名
        //abc.jpg
        String fileExtensionName = fileName.substring(fileName.lastIndexOf(".")+1);
        String uploadFileName = UUID.randomUUID().toString()+"."+fileExtensionName;
        logger.info("开始上传文件，上传文件名为:{}，上传路径:{}，新文件名:{}",fileName,path,uploadFileName);
        File fileDir = new File(path);
        if (!fileDir.exists()){
            fileDir.setWritable(true);
            fileDir.mkdirs();
        }
        File targetFile = new File(path,uploadFileName);
        try {
            file.transferTo(targetFile);
        } catch (IOException e) {
            logger.error("文件上传异常",e);
            e.printStackTrace();
        }
        return targetFile.getName();
    }
}
