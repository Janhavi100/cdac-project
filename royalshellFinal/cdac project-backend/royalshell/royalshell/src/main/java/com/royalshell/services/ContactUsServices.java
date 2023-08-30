package com.royalshell.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.royalshell.daos.IContactUsDao;
import com.royalshell.dtos.DtoEntityConverter;
import com.royalshell.entities.ContactUs;

@Transactional
@Service
public class ContactUsServices {

	@Autowired
	private IContactUsDao contactUsDao;

	@Autowired
	private DtoEntityConverter converter;

	public ContactUs findContactUs() {
		List<ContactUs> list = null;
		ContactUs contactUs = null;
		try {
			list = contactUsDao.findAll();
			contactUs = list.get(0);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return contactUs;
	}
	
	public Map<String, Object> addContactUs(ContactUs contactUs) {
		if(contactUs!=null) {
			ContactUs savedContactUs = null;
			try {
				savedContactUs = contactUsDao.save(contactUs);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return Collections.singletonMap("addedRows", 1);
		}
		return Collections.singletonMap("addedRows", 0);
	}
	
	public Map<String, Object> editContactUs(int id ,ContactUs contactUs) {
		if(contactUsDao.existsById(id)) {
			ContactUs savedContactUs = null;
			try {
				savedContactUs = contactUsDao.save(contactUs);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return Collections.singletonMap("updatedRows", 1);
		}
		return Collections.singletonMap("updatedRows", 0);
	}
	
	public Map<String, Object> deleteContactUs(int id) {
		if(contactUsDao.existsById(id)) {
			contactUsDao.deleteById(id);
			return Collections.singletonMap("deletedRows", 1);
		}
		return Collections.singletonMap("deletedRows", 0);
	}
	
}
