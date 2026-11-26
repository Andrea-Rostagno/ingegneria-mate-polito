---
tipo: competenza
area: fisica
corsi: [Fisica 2, Quantum physics]
livello: [triennale]
aliases: ["hydrogen atom", "equazione di Schrödinger per l'atomo di idrogeno", "massa ridotta", "reduced mass", "degenerazione n²", "atomo idrogenoide"]
tags: [competenza, area/fisica]
---

# Atomo di idrogeno

> Un elettrone nel campo coulombiano di un nucleo con $Z$ protoni: le autofunzioni dipendono da tre numeri quantici $(n,l,m)$ e l'energia, che dipende solo da $n$, vale $E_n\propto-1/n^2$ con degenerazione $n^2$.

## Definizione / enunciato
Si scrive l'hamiltoniano del sistema elettrone-nucleo con la massa ridotta. Il potenziale ha simmetria sferica, quindi in coordinate polari $\Psi$ si separa in una parte radiale (polinomi di Laguerre) e nelle funzioni sferiche del rotore. Le slide danno il risultato senza dimostrazione. $(n,l,m)$ sono gli autovalori di un insieme completo di operatori commutanti: $\hat H$, $\hat L^2$, $\hat L_z$. Aggiungendo lo spin, lo stato dell'elettrone è $(n,l,m,m_s)$ e, per il principio di esclusione di Pauli, due fermioni non possono avere tutti e quattro i numeri uguali.

## Formule chiave
$$V(r)=-\frac{Ze^2}{4\pi\varepsilon_0r},\qquad H=\frac{p^2}{2\mu}+V(r),\qquad \mu=\frac{mM}{m+M}\approx m$$
$$\left[-\frac{\hbar^2}{2m}\Delta-\frac{Ze^2}{4\pi\varepsilon_0r}\right]\Psi(\vec r)=E\Psi(\vec r),\qquad \Psi_{n,l,m}=R_{n,l}(r)Y_{lm}(\theta,\varphi)$$
$$E_n=-\frac{mZ^2e^4}{2(4\pi\varepsilon_0)^2\hbar^2}\frac{1}{n^2},\quad n=1,2,3,\dots;\quad l=0,\dots,n-1;\quad m=-l,\dots,l$$
$$\hat H\Psi_{n,l,m}=E_n\Psi_{n,l,m},\quad \hat L^2\Psi_{n,l,m}=l(l+1)\hbar^2\Psi_{n,l,m},\quad \hat L_z\Psi_{n,l,m}=m\hbar\Psi_{n,l,m}$$
$$\text{grado di degenerazione}=\sum_{l=0}^{n-1}(2l+1)=n^2$$
Spin: $\hat S^2\Rightarrow s(s+1)\hbar^2$; $\hat S_z\Rightarrow m_s\hbar$; per l'elettrone $s=\frac12$, $m_s=\pm\frac12$.

## Intuizione
$n$ fissa l'energia (e la distanza media dal nucleo), $l$ il modulo del momento angolare, $m$ la sua orientazione. Gli stati con stesso $n$ ma diversi $l,m$ hanno la stessa energia: la degenerazione $n^2$ (raddoppiata dallo spin) spiega i riempimenti dei gusci, con 2 elettroni in s, 6 in p, 10 in d.

## Come si usa
Esempio a mano (`57&58. LEZIONE.pdf` p. 16): transizioni nell'atomo H con $\frac1\lambda=R\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right)$, $R=1,097\cdot10^7$ m⁻¹; per $E_2-E_1$ la pagina riporta $\lambda=1,3\cdot10^{-7}$ m $=130$ nm. Lo stesso modello, con $\varepsilon_r$ del silicio, dà il livello del donore nel drogaggio.

## Nei corsi
- **Fisica 2** (triennale): lezione 61, "Cenni all'equazione di Schrödinger stazionaria per l'atomo di idrogeno", con spin, Stern-Gerlach e principio di Pauli; pp. 7-11 e 21-22 sono slide solo immagine (orbitali, densità radiale, spin, Pauli). Refuso a p. 16: $\vec\mu_S=-2\frac{e}{2m}\vec L$, dove ci dovrebbe essere $\vec S$. Fonti: `triennale/ANNO 2/fisica 2/lezioni/61. LEZIONE.pdf` (pp. 2-11, 18-22).
- **Quantum physics** (triennale): §10.2-10.3 della dispensa di V. Penna, in **unità di Gauss** (potenziale $-Ze^2/r$, $a=\hbar^2/m_ee^2$). Soluzione completa dell'equazione radiale: $u=x^{\ell+1}e^{-x}W(x)$, serie di potenze con ricorrenza $a_{k+1}=-\frac{x_0-2(\ell+1+k)}{(k+1)(k+2\ell+2)}a_k$, troncamento $x_0=2(\ell+1+N)$ (numero quantico radiale $N$), da cui $E_n=-\frac{m_eZ^2e^4}{2\hbar^2n^2}=-\frac{(Ze)^2}{2an^2}=-\frac{m_ec^2\alpha^2Z^2}{2n^2}$, $n=N+\ell+1$, degenerazione $\sum_{\ell=0}^{n-1}(2\ell+1)=n^2$; $W$ sono i polinomi associati di Laguerre $L^{2\ell+1}_{n-\ell-1}(2k_nr)$, $k_n=Z/(an)$. Densità radiale $P_{n\ell}=r^2R_{n\ell}^2$ con $n-\ell-1$ zeri; $\langle r\rangle=\frac{a}{2Z}(3n^2-\ell(\ell+1))$, $\Delta r/\langle r\rangle=1/\sqrt{2n+1}$ per $\ell=n-1$ (limite semiclassico, orbite circolari). Problema dei due corpi: $H=\frac{P^2}{2M}+\frac{p^2}{2\mu}+U$, $E_{tot}=\frac{\hbar^2K^2}{2M}+E_n$. Nella dispensa $E_1=-13.6$ eV; a p. 160 compare 13.5 eV. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 114-124).

## Prerequisiti
- [[Rotore rigido quantistico]]: la parte angolare sono le funzioni sferiche
- [[Potenziale elettrostatico]]: potenziale coulombiano -Ze²/4πε0r
- [[Potenziale centrale quantistico]]: equazione radiale per u(r) (Quantum physics)

## Porta a
- [[Drogaggio dei semiconduttori]]: il donore è un atomo idrogenoide schermato da εr
- [[Effetto Zeeman normale]]: separazione dei livelli in campo magnetico (Quantum physics)
- [[Atomo di elio]]: gli stati di partenza sono idrogenoidi con Z = 2 (Quantum physics)
- [[Accoppiamento spin-orbita]]: correzioni ai livelli E_n (Quantum physics)

## Collegati
- [[Modello atomico di Bohr]]: stessi livelli En ∝ -1/n², ora da Schrödinger
- [[Numeri quantici]]: n, l, m, ms nascono dalle autofunzioni
- [[Orbitali atomici]]: le autofunzioni Ψnlm sono gli orbitali
- [[Equazione di Schrödinger]]: l'atomo di idrogeno è la soluzione completa dell'equazione per il potenziale coulombiano
