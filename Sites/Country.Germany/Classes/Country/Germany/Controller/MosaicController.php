<?php
namespace Country\Germany\Controller;


use TYPO3\Flow\Annotations as Flow;
use TYPO3\Flow\Mvc\Controller\ActionController;

class MosaicController extends ActionController {

	public function indexAction() {
		$test_arr = array('a'=>1, 'b'=>2, 'c'=>3);
		return json_encode($test_arr);
	}
}