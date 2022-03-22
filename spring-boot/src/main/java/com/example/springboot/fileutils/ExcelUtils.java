package com.example.springboot.fileutils;

import com.example.springboot.model.ExcelModel;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

public class ExcelUtils {
    public static void eportExcelTemplate(String fileName, List<ExcelModel> excelModel) throws Exception{

        XSSFWorkbook workbook = new XSSFWorkbook();
        for (ExcelModel em : excelModel) {
            XSSFSheet sheet = workbook.createSheet(em.getSheetNames());

            int rowNumber = 0;
            AtomicInteger cellNumber = new AtomicInteger(0);

            Row row = sheet.createRow(cellNumber.getAndIncrement());
            em.getHeaders().forEach(header -> {
                Cell cell = row.createCell(cellNumber.getAndIncrement());
                cell.setCellValue(header);
            });
        }

        //Write the workbook in file system
        FileOutputStream out = new FileOutputStream(new File(fileName + ".xlsx"));
        workbook.write(out);
        out.close();
    }
}
