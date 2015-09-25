.PHONY: ops-website-setup ops-website-serve

MARKDOWN_ROOT=src/ops-website/src/markdown/en-US/documents

ops-website-setup: $(MARKDOWN_ROOT)/dev $(MARKDOWN_ROOT)/user

$(MARKDOWN_ROOT)/dev: $(BUILD_ROOT)/src/ops-docs
	$(V) cp -Rf $< $@
	$(V) rm -Rf $@/user

$(BUILD_ROOT)/src/ops-docs:
	$(V) git clone https://git.openswitch.net/openswitch/ops-docs $@

$(MARKDOWN_ROOT)/user: $(BUILD_ROOT)/src/ops
	$(V) cp -Rf $</docs $@

$(BUILD_ROOT)/src/ops:
	$(V)$(MAKE) devenv_add ops

ops-website-serve:
	$(V)cd src/ops-website/ ; PATH=$(STAGING_DIR_NATIVE)/usr/bin:$$PATH $(STAGING_DIR_NATIVE)/usr/bin/gulp dev

ops-website-dist:
	$(V)cd src/ops-website/ ; PATH=$(STAGING_DIR_NATIVE)/usr/bin:$$PATH $(STAGING_DIR_NATIVE)/usr/bin/gulp dist

ops-website-update:
	$(V)rm -Rf $(MARKDOWN_ROOT)/user $(MARKDOWN_ROOT)/dev
	$(V)cd $(BUILD_ROOT)/src/ops; git pull
	$(V)cd $(BUILD_ROOT)/src/ops-docs; git pull
	$(V)$(MAKE) $(MARKDOWN_ROOT)/user $(MARKDOWN_ROOT)/dev
