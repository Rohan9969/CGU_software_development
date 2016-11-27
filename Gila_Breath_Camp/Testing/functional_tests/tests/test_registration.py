from selenium import webdriver
import pytest

from .base_test import BaseTest
from ..pages.home_page import HomePage


class TestRegistrationPage(BaseTest):

	def setup_method(self):
		self.home_page = HomePage(self.driver)
		self.home_page.visit()

	def terardown_method(self):
		self.driver.close()

	def test_registration_form_redirection(self):
		print (self.driver.title)
		self.home_page.click_on_clerk_button()
		import pdb;pdb.set_trace()
		#clerk_btn = driver.find_element_by_xpath("//a[@href='/Static/Templates/tran-his.html']")
		#webdriver.ActionChains(driver).move_to_element(clerk_btn).click(clerk_btn).perform()

	def test_fill_registration_form(self):
		self.home_page.click_on_clerk_button()
		self.home_page.enter_camper_name("Emma","watson")
		self.home_page.enter_campers_age(27)
		self.home_page.select_camper_gender("female")
		self.home_page.enter_camper_address("840 Wood St, Clarion, PA 16214, USA")