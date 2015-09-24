.PHONY: ops-website-setup ops-website-serve

MARKDOWN_ROOT=src/ops-website/src/markdown/en-US/documents

ops-website-setup: $(MARKDOWN_ROOT)/dev $(MARKDOWN_ROOT)/user

$(MARKDOWN_ROOT)/dev:
	$(V) git clone https://git.openswitch.net/openswitch/ops-docs $@

$(MARKDOWN_ROOT)/user: $(BUILD_ROOT)/src/ops
	$(V) cp -Rf $</docs $@

$(BUILD_ROOT)/src/ops:
	$(V)$(MAKE) devenv_add ops

ops-website-serve:
	$(V)cd src/ops-website/ ; $(STAGING_DIR_NATIVE)/usr/bin/gulp dev

ops-website-dist:
	$(V)cd src/ops-website/ ; $(STAGING_DIR_NATIVE)/usr/bin/gulp dist
