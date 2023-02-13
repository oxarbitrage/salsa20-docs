const commit = [["https://github.com/leanprover-community/mathlib/blob/master/src/", "https://github.com/leanprover-community/mathlib/blob/0bd4faeefa19bd012a18e5fe23bf46d3def25043/src/"]];
function redirectTo(tgt) {
  let loc = tgt;
  for (const [prefix, replacement] of commit) {
    if (tgt.startsWith(prefix)) {
      loc = tgt.replace(prefix, replacement);
      break;
    }
  }
  window.location.replace(loc);
}
