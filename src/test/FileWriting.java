package test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import process.WriteToFile;

/**
 * Servlet implementation class WritingFile
 */
@WebServlet("/FileWriting")
public class FileWriting extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FileWriting() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		RequestDispatcher dispatch = null;
		WriteToFile write = new WriteToFile();
		request.setCharacterEncoding("UTF8");
		
		String name = request.getParameter("name");
		String blood = request.getParameter("blood");
		String prefecture = request.getParameter("pref");
		
		List<String> profile = new ArrayList<String>();
		
		profile.add(name);
		profile.add(blood);
		profile.add(prefecture);
		
		boolean writeProcess = write.writeProfile(profile);
		
		request.setAttribute("profile", profile);
		request.setAttribute("writeProcess", writeProcess);
		
		dispatch = request.getRequestDispatcher("FileWritingResult.jsp");
		dispatch.forward(request, response);
		
	}

}
