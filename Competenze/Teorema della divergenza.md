---
tipo: competenza
area: analisi
corsi: [Analisi 2, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["divergence theorem", "teorema di Gauss", "teorema di Gauss-Green", "divergenza", "divergence", "div F", "flusso uscente da un solido"]
tags: [competenza, area/analisi]
---

# Teorema della divergenza

> Il flusso uscente di un campo attraverso la frontiera di un solido è l'integrale della divergenza sul solido; in $\mathbb R^2$ equivale a Green applicato al campo ruotato.

## Definizione / enunciato
**Teorema di Gauss.** Sia $\Omega\subset\mathbb R^3$ aperto limitato con frontiera $\partial\Omega$ superficie regolare (o regolare a tratti), e $F$ di classe $C^1$ in $\Omega$ e continuo in $\bar\Omega$. Allora
$$\int_{\partial\Omega}F\cdot\hat N\,d\sigma=\iiint_\Omega\mathrm{div}\,F\,dx\,dy\,dz,\qquad \mathrm{div}\,F=\frac{\partial F_1}{\partial x}+\frac{\partial F_2}{\partial y}+\frac{\partial F_3}{\partial z},$$
con $\hat N$ normale uscente. La divergenza è la traccia della jacobiana e il teorema vale in ogni dimensione.

**Versione 2D.** Se $\Omega\subset\mathbb R^2$ è aperto limitato con frontiera una curva $\gamma$ regolare a tratti (orientata con $\Omega$ a sinistra) e $F$ è $C^1$:
$$\int_\gamma F\cdot\hat N\,dl=\iint_\Omega\Big(\frac{\partial F_1}{\partial x}+\frac{\partial F_2}{\partial y}\Big)dx\,dy.$$

## Formule chiave
Per $\gamma(t)=(\gamma_1,\gamma_2)$ antioraria, la normale uscente è il versore tangente ruotato di $90°$ in senso orario: $\hat N=\frac{(\gamma_2',-\gamma_1')}{\|\gamma'\|}$, e
$$\int_\gamma F\cdot\hat N\,dl=\int_a^b\{F_1(\gamma)\gamma_2'-F_2(\gamma)\gamma_1'\}\,dt=\oint_\gamma G\cdot dl,\qquad G=(-F_2,F_1).$$
Con Green su $G$ si ottiene la versione 2D.

## Intuizione
La divergenza misura quanta "sorgente" c'è in ogni punto: sommando le sorgenti interne si ottiene ciò che esce dal bordo. Se $F=\mathrm{Rot}\,H$, allora $\mathrm{div}\,F=0$ e il flusso di un rotore attraverso la frontiera di un solido è nullo.

## Come si usa
Il flusso uscente da una superficie chiusa si calcola come integrale triplo, spesso molto più semplice. In $\mathbb R^2$ il flusso attraverso una curva è la circuitazione del campo ruotato.

## Nei corsi
- **Analisi 2** (triennale): lezione del 23/11/2022. Fonte: `triennale/ANNO 2/analisi 2/AII 16 2022 stokes e gauss.pdf` (pp. 10-17). Sulla p. 13 il versore tangente è scritto con $\|\gamma(t)\|$ al denominatore, invece di $\|\gamma'(t)\|$ (svista; nelle formule successive c'è $\|\gamma'(t)\|$).
- **Equazioni di fisica matematica** (triennale): citato come "teorema di Gauss", $\int_B\mathrm{div}F\,dx=\int_{\partial B}F\cdot n\,d\sigma$. È lo strumento delle PDE del corso:
  - passaggio dalla forma integrale alla forma puntuale delle leggi di conservazione;
  - conservazione della massa per il calore con Neumann omogeneo, $\int_\Omega\Delta u=\int_{\partial\Omega}\partial u/\partial n=0$;
  - stime dell'energia, $\int_\Omega\Delta w\,\partial_tw=\int_{\partial\Omega}\nabla w\,\partial_tw\cdot n-\int_\Omega\nabla w\cdot\nabla(\partial_tw)$.
  Fonti: `triennale/ANNO 3/eq fisica matematica/15 - Lezione 10_11_23.pdf` (p. 1); `triennale/ANNO 3/eq fisica matematica/25 - Lezione 06_12_23.pdf` (p. 6); `triennale/ANNO 3/eq fisica matematica/27 - Lezione 13_12_23.pdf` (p. 5); `triennale/ANNO 3/eq fisica matematica/30 - Lezione 20_12_23.pdf` (p. 2).

## Prerequisiti
- [[Integrale triplo]]: membro destro del teorema
- [[Teorema di Green]]: in R^2 Gauss equivale a Green sul campo ruotato
- [[Flusso di un campo vettoriale]]: flusso uscente dalla frontiera

## Porta a
- [[Legge di Gauss per il campo magnetico]]: dalla forma integrale alla forma differenziale
- [[Vettore di Poynting]]: dalla derivata dell'energia al flusso uscente
- [[Legge di conservazione]]: dalla forma integrale alla forma puntuale (Equazioni di fisica matematica)
- [[Metodo dell'energia]]: integrazione per parti del laplaciano (Equazioni di fisica matematica)
- [[Equazione del calore su un dominio limitato]]: conservazione della massa con Neumann omogeneo (Equazioni di fisica matematica)

## Collegati
- [[Matrice jacobiana]]: la divergenza è la traccia della jacobiana
- [[Rotore]]: div(Rot H) = 0
- [[Teorema di Stokes]]: flusso di un rotore su una superficie chiusa è nullo
- [[Teorema di Gauss del flusso]]: versione fisica per il campo elettrico
