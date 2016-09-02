.PHONY: ops-website-setup ops-website-serve

MARKDOWN_ROOT=src/ops-website/src/markdown/en-US/documents

COMPONENTS = ops-cli ops-fand ops-ledd ops-powerd ops-pmd ops-sysd ops-restd ops-cfgd ops-intfd ops-tempd ops-openvswitch ops-aaa-utils ops-arpmgrd ops-bufmond ops-dhcp-tftp ops-ft-framework ops-lacpd ops-lldpd ops-mgmt-intf ops-portd ops-quagga ops-utils ops-vland ops-vsi ops-webui ops-hw-config ops-switchd-container-plugin ops-switchd-opennsl-plugin ops-ntpd ops-ansible ops-rbac ops-classifierd ops-switchd ops-snmpd

ops-website-setup: $(MARKDOWN_ROOT)/dev $(MARKDOWN_ROOT)/user $(foreach component,$(COMPONENTS),$(MARKDOWN_ROOT)/dev/$(component))

$(MARKDOWN_ROOT)/dev: $(BUILD_ROOT)/src/ops-docs
	$(V) cp -Rf $< $@
	$(V) rm -Rf $@/user

define make-component
$(MARKDOWN_ROOT)/dev/$(1): $(MARKDOWN_ROOT)/dev src/$(1)
	$(V) mkdir -p $(MARKDOWN_ROOT)/dev/$(1)
	$(V) if [ -f src/$(1)/DESIGN.md ] ; then \
	  cp -R src/$(1)/DESIGN.md $(MARKDOWN_ROOT)/dev/$(1) ; \
	else \
	  if [ -f src/$(1)/ops/docs/DESIGN.md ] ; then \
	    cp -R src/$(1)/ops/docs/DESIGN.md $(MARKDOWN_ROOT)/dev/$(1) ; \
	  else \
	    echo "# Placeholder page" > $(MARKDOWN_ROOT)/dev/$(1)/design.md ; \
	  fi \
	fi
	if [ -d src/$(1)/ops-tests/feature ] ; then \
		find src/$(1)/ops-tests/feature -maxdepth 2 -iname "*.md" -exec cp -Rf {} $(MARKDOWN_ROOT)/user \; ;\
	fi
	if [ -d src/$(1)/ops-tests/component ] ; then \
		find src/$(1)/ops-tests/component -maxdepth 2 -iname "*.md" -exec cp -Rf {} $(MARKDOWN_ROOT)/dev/$(1) \; ;\
	fi
	if [ -d src/$(1)/src ] ; then \
		find src/$(1)/src -maxdepth 5 -iname "*_design.md" -exec cp -Rf {} $(MARKDOWN_ROOT)/user \; ;\
	fi

src/$(1):
	$(V) $(MAKE) devenv_add $(1)

update-website-$(1): $(MARKDOWN_ROOT)/dev/$(1)
	$(V) $(ECHO) Updating $(1)...
	$(V) cd src/$(1) ; git pull origin master || true
	$(V) if [ -f src/$(1)/DESIGN.md ] ; then \
	  cp -R src/$(1)/DESIGN.md $(MARKDOWN_ROOT)/dev/$(1) ; \
	else \
	  if [ -f src/$(1)/ops/docs/DESIGN.md ] ; then \
	    cp -R src/$(1)/ops/docs/DESIGN.md $(MARKDOWN_ROOT)/dev/$(1) ; \
	  else \
	    echo "# Placeholder page" > $(MARKDOWN_ROOT)/dev/$(1)/design.md ; \
	  fi \
	fi
	if [ -d src/$(1)/ops-tests/feature ] ; then \
		find src/$(1)/ops-tests/feature -maxdepth 2 -iname "*.md" -exec cp -Rf {} $(MARKDOWN_ROOT)/user \; ;\
	fi
	if [ -d src/$(1)/ops-tests/component ] ; then \
		find src/$(1)/ops-tests/component -maxdepth 2 -iname "*.md" -exec cp -Rf {} $(MARKDOWN_ROOT)/dev/$(1) \; ;\
	fi
	if [ -d src/$(1)/src ] ; then \
		find src/$(1)/src -maxdepth 5 -iname "*_design.md" -exec cp -Rf {} $(MARKDOWN_ROOT)/user \; ;\
	fi

endef

$(foreach component,$(COMPONENTS),$(eval $(call make-component,$(component))))

$(BUILD_ROOT)/src/ops-docs:
	$(V) git clone https://git.openswitch.net/openswitch/ops-docs $@

$(MARKDOWN_ROOT)/user: $(BUILD_ROOT)/src/ops
	$(V) cp -Rf $</docs $@
	$(V) find $</tests -iname "*.md" -exec cp -Rf {} $@ \;


$(BUILD_ROOT)/src/ops:
	$(V)$(MAKE) devenv_add ops

ops-website-serve:
	$(V)cd src/ops-website/ ; PATH=$(STAGING_DIR_NATIVE)/usr/bin:$$PATH $(STAGING_DIR_NATIVE)/usr/bin/gulp dev

ops-website-dist:
	$(V)cd src/ops-website/ ; PATH=$(STAGING_DIR_NATIVE)/usr/bin:$$PATH $(STAGING_DIR_NATIVE)/usr/bin/gulp dist

ops-website-update:
	$(V)rm -Rf $(MARKDOWN_ROOT)/user $(MARKDOWN_ROOT)/dev
	$(V)cd $(BUILD_ROOT)/src/ops; git pull origin master || true
	$(V)cd $(BUILD_ROOT)/src/ops-docs; git pull origin master || true
	$(V)cd $(BUILD_ROOT)/src/ops-website; git pull origin master || true
	$(V)$(MAKE) $(MARKDOWN_ROOT)/user $(MARKDOWN_ROOT)/dev
	$(V)$(MAKE) $(foreach component,$(COMPONENTS),update-website-$(component))
