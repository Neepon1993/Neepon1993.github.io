package process;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

public class WriteToFile {
	
	public boolean writeProfile(List<String> profile) {
		PrintWriter pw = null;
		File file = new File("C:\\Users\\NIITSU\\Desktop\\fileTest\\Profile.txt");
		
		try {
			pw = new PrintWriter( new BufferedWriter 
	                ( new OutputStreamWriter ( new FileOutputStream(file),"UTF-8" ) ) );
			
			for (int i = 0 ; i < profile.size() ; i++) {
				pw.print( profile.get(i) );
				pw.print(",");
			}
			pw.println();
			
		} catch ( IOException e ) {
			e.printStackTrace();
			return false;
			
		} finally {
			try {
				pw.close();
			} catch ( Exception e ) {
				
			}
		}
		
		return true;
	}
	
}
